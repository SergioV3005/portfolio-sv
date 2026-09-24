import Image from "next/image";
import Tag from "@/components/Tag";
import { Certification } from "@/lib/types";

export default function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <a
      href={cert.href}
      target="_blank"
      rel="noreferrer"
      className="glass-card group block h-full rounded-2xl p-5"
    >
      <div className="flex items-start gap-4">
        <div className="logo-chip h-11 w-11 rounded-xl">
          <div className="relative h-full w-full">
            <Image src={cert.image} alt={`${cert.issuer} logo`} fill className="object-cover" sizes="44px" />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-display text-[0.95rem] font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">
            {cert.title}
          </h3>
          <p className="mt-0.5 text-xs text-muted">{cert.issuer}</p>

          <div className="mt-2 flex flex-wrap items-center gap-x-2 font-mono text-[0.68rem] text-muted">
            <span>Issued {cert.issuedDate}</span>
            {cert.expiryDate && (
              <>
                <span className="opacity-40">·</span>
                <span>Expires {cert.expiryDate}</span>
              </>
            )}
          </div>

          {cert.credentialId && (
            <p className="mt-1 font-mono text-[0.65rem] text-muted/80">Credential ID {cert.credentialId}</p>
          )}

          {cert.skills && cert.skills.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {cert.skills.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </div>
          )}
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0 text-accent opacity-40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
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
