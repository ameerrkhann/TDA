"use client";

import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  applianceType: string;
  brand: string;
  modelNumber: string;
  cityZip: string;
  message: string;
};

const applianceTypes = [
  "Refrigerator",
  "Freezer",
  "Washer",
  "Dryer",
  "Dishwasher",
  "Oven",
  "Stove",
  "Range",
  "Microwave",
  "Other",
];

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  applianceType: "",
  brand: "",
  modelNumber: "",
  cityZip: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      // Server action or API endpoint can be wired in here
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-brand-green/30 bg-brand-green/5 p-8 text-center">
        <div className="mb-4 text-4xl">&#x2705;</div>
        <h3 className="text-xl font-bold text-charcoal">
          Thank You for Reaching Out
        </h3>
        <p className="mt-2 text-muted">
          We received your request and will get back to you as soon as possible.
          If your matter is urgent, please call us directly at{" "}
          <a
            href="tel:+17182345111"
            className="font-semibold text-brand-blue hover:underline"
          >
            718-234-5111
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-blue hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-white px-4 py-3 text-charcoal placeholder:text-muted/50 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="rounded-lg border border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-charcoal">
          Address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          value={form.address}
          onChange={handleChange}
          className={inputClass}
          placeholder="Your street address"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="applianceType" className="mb-1.5 block text-sm font-medium text-charcoal">
            Appliance Type
          </label>
          <select
            id="applianceType"
            name="applianceType"
            value={form.applianceType}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select appliance</option>
            {applianceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="brand" className="mb-1.5 block text-sm font-medium text-charcoal">
            Brand
          </label>
          <input
            id="brand"
            name="brand"
            type="text"
            value={form.brand}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g., Samsung, Whirlpool"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="modelNumber" className="mb-1.5 block text-sm font-medium text-charcoal">
            Model Number
          </label>
          <input
            id="modelNumber"
            name="modelNumber"
            type="text"
            value={form.modelNumber}
            onChange={handleChange}
            className={inputClass}
            placeholder="If available"
          />
        </div>
        <div>
          <label htmlFor="cityZip" className="mb-1.5 block text-sm font-medium text-charcoal">
            City / ZIP Code
          </label>
          <input
            id="cityZip"
            name="cityZip"
            type="text"
            value={form.cityZip}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your city or ZIP"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
          Describe the Issue
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className={inputClass}
          placeholder="Tell us what's going on with your appliance..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-brand-blue px-8 py-3.5 text-lg font-bold text-white transition-colors hover:bg-blue-700 sm:w-auto"
      >
        Submit Request
      </button>
    </form>
  );
}
