import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-md p-8 rounded-2xl bg-pastel-blue border border-slate-200/80 shadow-xs">
        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-brand-navy text-white flex items-center justify-center shadow-sm">
          <Sparkles className="w-6 h-6 text-brand-red" />
        </div>
        <h1 className="text-3xl font-black tracking-tight text-brand-navy mb-2">
          NEVE
        </h1>
        <p className="text-sm text-brand-navy-light/80 mb-6 font-medium">
          Static Product Information Website
        </p>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4" />
          <span>Environment & Architecture Initialized</span>
        </div>
      </div>
    </main>
  );
}
