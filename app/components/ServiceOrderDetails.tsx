import Link from "next/link";

type ServiceKind = "services" | "3d-puff" | "cap" | "applique";

const ORDER_DETAILS = {
  services: {
    title: "What to Send for an Embroidery Digitizing Quote",
    intro: "A stitch file is prepared for a particular size, placement and fabric. Include these details so we can assess the artwork and confirm the right service before work starts.",
    requirements: [
      "Your logo in AI, EPS, SVG or PDF, or a clear PNG or JPG. Include the wording if small text is difficult to read.",
      "Finished width and height in inches or millimetres, plus the placement: left chest, cap front, jacket back or patch.",
      "Garment and fabric type, your embroidery machine's required file format, and the date you need the file.",
    ],
    checks: "Tell us about small lettering, fine outlines or gradients that must be preserved. We can discuss simplifying details before you approve the quote. A file sized for a jacket back should not simply be reduced for a cap or left chest.",
  },
  "3d-puff": {
    title: "Before Ordering a 3D Puff Stitch File",
    intro: "Foam changes how a logo is digitized. Send the production details with your artwork so raised lettering and flat details can be planned together.",
    requirements: [
      "Mark which letters or shapes should be raised and which details should remain flat embroidery.",
      "Provide the finished dimensions, cap or garment type, and the foam thickness you intend to use. If you have not chosen foam, say so in your request.",
      "Include the required machine format, thread colours and deadline. Mention any flat embroidery that must sew before foam placement.",
    ],
    checks: "Fine text, narrow gaps and small outlines may need to stay flat or be simplified. Before a production run, check the foam-placement stop, end coverage and foam removal on a sample using the intended materials.",
  },
  cap: {
    title: "What We Need for Your Cap Logo File",
    intro: "A cap file needs the actual hat construction and sewing area. A flat-shirt logo file is not a substitute for a file prepared for your cap frame.",
    requirements: [
      "Send the hat style: structured or unstructured, five-panel or six-panel, plus the intended front, side or back placement.",
      "Confirm the logo's finished width and height and your frame's usable sewing area. Identify any centre seam running through the artwork.",
      "Specify flat embroidery or a flat-and-puff combination, the required machine format, thread colours and deadline.",
    ],
    checks: "Small lettering and outlines crossing a centre seam need particular attention. Test the file on the same hat blank and frame intended for production, checking registration around the seam before stitching a batch.",
  },
  applique: {
    title: "Preparing an Applique Digitizing Order",
    intro: "Applique combines fabric pieces with stitching. Your cutting method and material affect the placement, tackdown and finishing sequence.",
    requirements: [
      "Identify which areas use applique fabric and provide the finished design dimensions and garment material.",
      "Tell us whether you will trim fabric in the hoop or use pre-cut pieces. If you need a cutting template or vector cut file, request it with the quote and specify the format.",
      "Include the applique material, preferred border finish, embroidery machine format and deadline.",
    ],
    checks: "Confirm the placement line, fabric-placement stops, tackdown and border order on a sample. Check that the border covers the cut edge using your actual fabric and cutting method before starting production.",
  },
} satisfies Record<ServiceKind, {
  title: string;
  intro: string;
  requirements: string[];
  checks: string;
}>;

export default function ServiceOrderDetails({ kind }: { kind: ServiceKind }) {
  const details = ORDER_DETAILS[kind];

  return (
    <section className="bg-white py-16 lg:py-20" aria-labelledby="order-details-title">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <h2 id="order-details-title" className="font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
          {details.title}
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-navy-950/70">{details.intro}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-bold text-navy-950">Include with your artwork</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-navy-950/75">
              {details.requirements.map((requirement) => <li key={requirement}>{requirement}</li>)}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-navy-950/70">{details.checks}</p>
          </div>
          <div className="rounded-2xl border border-navy-950/10 bg-slate-50 p-6">
            <h3 className="text-lg font-bold text-navy-950">Confirm the file, timing and revisions</h3>
            <p className="mt-4 text-sm leading-relaxed text-navy-950/75">
              Delivery is a digital embroidery file in the agreed machine format, not a finished garment.
              Confirm the finished size, colour sequence and any additional cutting or artwork files in your quote.
              An AI, SVG or PNG artwork file still needs digitizing before a machine can sew it.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-navy-950/75">
              Delivery time and included revisions depend on the selected plan. Check the pricing below and
              confirm your deadline before ordering. If a sample needs adjustment, send a clear photo of the
              sew-out with the fabric, stabilizer and machine details.
            </p>
            <Link href="/contact" className="mt-6 inline-flex font-semibold text-brand-700 underline underline-offset-4">
              Send artwork for a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
