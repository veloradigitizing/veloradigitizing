"use client";

import { useState } from "react";
import Link from "next/link";
import { formatPrice, planForStitches } from "./pricing-data";

/**
 * Stitch count estimator embedded in the stitch count guide. Uses the same
 * per-square-inch baselines the article explains (40-weight thread, 0.40 mm
 * density), so the article and the tool never disagree.
 */
const DESIGN_TYPES = [
  {
    id: "fill",
    label: "Solid filled logo",
    hint: "Mostly tatami fill, little open space",
    low: 1000,
    high: 1200,
  },
  {
    id: "mixed",
    label: "Mixed logo",
    hint: "Fill areas plus text or outlines",
    low: 700,
    high: 900,
  },
  {
    id: "text",
    label: "Text or outline only",
    hint: "Lettering, line art, open shapes",
    low: 400,
    high: 600,
  },
] as const;

type DesignTypeId = (typeof DESIGN_TYPES)[number]["id"];

const roundTo = (value: number, step: number) => Math.round(value / step) * step;

export default function StitchCountCalculator() {
  const [width, setWidth] = useState("3.5");
  const [height, setHeight] = useState("1.5");
  const [unit, setUnit] = useState<"in" | "cm">("in");
  const [designType, setDesignType] = useState<DesignTypeId>("mixed");

  const w = parseFloat(width);
  const h = parseFloat(height);
  const valid = Number.isFinite(w) && Number.isFinite(h) && w > 0 && h > 0;

  const toInches = (v: number) => (unit === "cm" ? v / 2.54 : v);
  const areaSqIn = valid ? toInches(w) * toInches(h) : 0;
  const type = DESIGN_TYPES.find((t) => t.id === designType) ?? DESIGN_TYPES[1];
  const low = roundTo(areaSqIn * type.low, 100);
  const high = roundTo(areaSqIn * type.high, 100);
  const plan = planForStitches(high);

  const inputClass =
    "mt-1 w-full rounded-md border border-navy-950/15 bg-white px-3 py-2.5 text-sm text-navy-950 outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20";

  return (
    <div className="mt-8 rounded-2xl border border-navy-950/10 bg-brand-50/40 p-6 sm:p-7">
      <p className="text-[11px] font-bold uppercase tracking-wider text-brand-600">
        Free tool
      </p>
      <h3 className="mt-1 font-serif text-xl font-bold text-navy-950">
        Embroidery Stitch Count Calculator
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-950/65">
        Enter the finished embroidery size and the kind of design. The estimate
        uses the baselines above for 40-weight thread at 0.40 mm density.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <label className="block text-xs font-semibold text-navy-950/70">
          Width
          <input
            type="number"
            inputMode="decimal"
            min="0.1"
            step="0.1"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="block text-xs font-semibold text-navy-950/70">
          Height
          <input
            type="number"
            inputMode="decimal"
            min="0.1"
            step="0.1"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="block text-xs font-semibold text-navy-950/70">
          Unit
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value as "in" | "cm")}
            className={inputClass}
          >
            <option value="in">inches</option>
            <option value="cm">centimeters</option>
          </select>
        </label>
        <label className="block text-xs font-semibold text-navy-950/70">
          Design type
          <select
            value={designType}
            onChange={(e) => setDesignType(e.target.value as DesignTypeId)}
            className={inputClass}
          >
            {DESIGN_TYPES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="mt-2 text-xs text-navy-950/50">{type.hint}</p>

      <div
        aria-live="polite"
        className="mt-6 grid grid-cols-1 gap-4 rounded-xl bg-white p-5 sm:grid-cols-3"
      >
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-navy-950/50">
            Estimated stitches
          </p>
          <p className="mt-1 font-serif text-2xl font-bold text-navy-950">
            {valid
              ? `${low.toLocaleString("en-US")} to ${high.toLocaleString("en-US")}`
              : "Enter a size"}
          </p>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-navy-950/50">
            Area
          </p>
          <p className="mt-1 font-serif text-2xl font-bold text-navy-950">
            {valid ? `${areaSqIn.toFixed(1)} sq in` : "–"}
          </p>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-navy-950/50">
            Suggested plan
          </p>
          <p className="mt-1 font-serif text-2xl font-bold text-brand-600">
            {valid ? `${plan.name}, ${formatPrice(plan.price)}` : "–"}
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-navy-950/55">
        Small lettering, heavy satin borders and 3D puff push counts above this
        range. For an exact count,{" "}
        <Link
          href="/contact"
          className="font-semibold text-brand-600 underline decoration-brand-600/30 underline-offset-2 hover:text-brand-700"
        >
          send us the artwork
        </Link>{" "}
        and we return the stitch count with a free quote.
      </p>
    </div>
  );
}
