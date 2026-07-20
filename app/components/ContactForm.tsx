import Icon, { IconName } from "./Icon";
import { Reveal } from "./Reveal";

const SERVICE_OPTIONS = [
  "Select a service",
  "Embroidery Digitizing",
  "Vector Conversion",
  "Rush Orders",
  "3D Puff Digitizing",
  "Patch Digitizing",
];

export default function ContactForm({
  formId = "contact-form",
  services = SERVICE_OPTIONS,
}: {
  formId?: string;
  services?: string[];
}) {
  return (
    <Reveal
      direction="right"
      className="rounded-2xl border border-navy-950/10 bg-white p-8"
    >
      <h3 className="font-serif text-2xl font-bold text-navy-950">
        Send Us a Message
      </h3>
      <div className="mt-3 h-[3px] w-12 rounded-full bg-brand-600" />
      <p className="mt-4 text-sm text-navy-950/55">
        Fill out the form and we&rsquo;ll get back to you as soon as possible.
      </p>

      <form id={formId} className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950">
          Your Name
          <input
            type="text"
            placeholder="Enter your name"
            className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950">
          Email Address
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950 sm:col-span-2">
          Subject
          <input
            type="text"
            placeholder="Enter subject"
            className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950 sm:col-span-2">
          Service Needed
          <select className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm text-navy-950/70 outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15">
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950 sm:col-span-2">
          Message
          <textarea
            rows={4}
            placeholder="Tell us about your project..."
            className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15"
          />
        </label>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium text-navy-950">
            Upload Design (Optional)
          </p>
          <div className="vr-lift group flex flex-col items-center gap-2 rounded-lg border border-dashed border-navy-950/20 bg-navy-950/[0.02] px-6 py-8 text-center transition-colors group-hover:border-brand-600/40 group-hover:bg-brand-50/30">
            <Icon
              name="paperclip"
              className="h-6 w-6 text-navy-950/30 transition-colors group-hover:text-brand-600"
            />
            <p className="text-sm text-navy-950/50">
              Drag &amp; drop your file here or{" "}
              <span className="font-semibold text-brand-600">browse</span>
            </p>
            <p className="text-xs text-navy-950/35">
              Supported formats: JPG, PNG, PDF, AI, EPS, CDR (Max file size:
              20MB)
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="vr-btn vr-btn-primary flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:col-span-2"
        >
          SEND MESSAGE <Icon name="send" className="h-4 w-4" />
        </button>
      </form>
    </Reveal>
  );
}
