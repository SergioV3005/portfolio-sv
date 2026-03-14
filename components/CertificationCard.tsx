import Image from "next/image";
import Tag from "@/components/Tag";
import { Certification } from "@/lib/types";

export default function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <a
      href={cert.href}
      target="_blank"
      rel="noreferrer"
      className="glass-card group block rounded-2xl px-5 py-5 transition-transform duration-200 hover:-translate-y-0.5"
    >
      <div className="flex items-start gap-4">
        {/* Issuer logo */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-accent/20 bg-accent/5">
          <div className="relative h-full w-full">
            <Image
              src={cert.image}
              alt={`${cert.issuer} logo`}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1">
          <h3 className="font-mono text-sm font-semibold leading-snug">
            {cert.title}
          </h3>
          <p className="mt-0.5 text-xs text-muted">{cert.issuer}</p>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-2 text-xs text-muted">
            <span>Issued {cert.issuedDate}</span>
            {cert.expiryDate && (
              <>
                <span className="opacity-40">·</span>
                <span>Expires {cert.expiryDate}</span>
              </>
            )}
          </div>

          {cert.credentialId && (
            <p className="mt-1 text-[11px] text-muted/70">
              Credential ID {cert.credentialId}
            </p>
          )}

          {cert.skills && cert.skills.length > 0 && (
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {cert.skills.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </div>
          )}
        </div>

        {/* Arrow icon */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0 text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>
    </a>
  );
}
