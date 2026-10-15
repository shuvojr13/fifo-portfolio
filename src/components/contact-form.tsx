"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { cn } from "cn";

const projectTypes = [
  "Web / App development",
  "Brand identity",
  "Illustration",
  "Full engagement (mixed)",
  "Not sure yet",
] as const;

const budgets = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $40k",
  "$40k+",
  "Prefer to discuss",
] as const;

const timelines = [
  "ASAP / within a month",
  "1 – 3 months",
  "3 – 6 months",
  "Flexible / exploring",
] as const;

const fieldClass =
  "bg-surface-container-low text-on-surface text-body-md placeholder:text-on-surface-variant/60 focus:ring-primary-container/30 focus:border-primary-container w-full rounded-lg border border-transparent px-4 py-3 outline-none transition focus:ring-2";

const labelClass = "text-label-md text-on-surface mb-1.5 block font-medium";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);

    // Demo-only: simulate a short submit delay for friendly UX feedback.
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="bg-surface-container-lowest flex flex-col items-start rounded-2xl p-8 shadow-sm md:p-10">
        <div className="bg-secondary-container text-primary-container mb-5 flex h-12 w-12 items-center justify-center rounded-full">
          <CheckCircle2 className="size-6" strokeWidth={1.5} />
        </div>
        <h3 className="text-headline-md text-on-surface">Message received</h3>
        <p className="text-body-md text-on-surface-variant mt-3 max-w-md leading-relaxed">
          Thank you for reaching out. A principal from FIFO SOLUTIONS will reply
          within two business days with next steps or clarifying questions.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-label-md text-primary-container hover:text-primary mt-6 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm md:p-10"
      noValidate
    >
      <div className="mb-8">
        <h2 className="text-headline-md text-on-surface">Project inquiry</h2>
        <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">
          Share a few details so we can prepare a useful first reply. Fields
          marked with * are required.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name *
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Ada Lovelace"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company / organization
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Optional"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="role" className={labelClass}>
            Your role
          </label>
          <input
            id="role"
            name="role"
            placeholder="Founder, PM, Creative Director…"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="projectType" className={labelClass}>
            Project type *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className={cn(fieldClass, "appearance-none")}
          >
            <option value="" disabled>
              Select one
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Approximate budget
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className={cn(fieldClass, "appearance-none")}
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="timeline" className={labelClass}>
            Ideal timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            defaultValue=""
            className={cn(fieldClass, "appearance-none")}
          >
            <option value="" disabled>
              Select a window
            </option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Project overview *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="What are you building, who is it for, and what does success look like?"
            className={cn(fieldClass, "resize-y min-h-[140px]")}
          />
          <p className="text-caption text-on-surface-variant mt-2">
            Tip: include links to a site, deck, Figma, or competitor references
            if you have them.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-caption text-on-surface-variant max-w-sm leading-relaxed">
          By submitting, you agree we may store this inquiry to respond. We
          never share your details with third parties.
        </p>
        <button
          type="submit"
          disabled={sending}
          className="bg-primary-container text-on-primary text-label-md hover:bg-primary inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full px-8 shadow-sm transition-colors disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send inquiry"}
          {!sending && <Send className="size-4" strokeWidth={1.75} />}
        </button>
      </div>
    </form>
  );
}
