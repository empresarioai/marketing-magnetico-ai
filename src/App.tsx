

function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-brand selection:text-white">
      

{/* NAVIGATION (Clean, minimal, spacious) */}
<header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 transition-all">
  <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
    <a href="#" className="flex items-center">
      <img alt="Marketing Magnético Logo" className="h-9 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8dfNyCKnXqa2BkpQ582l8CL9GdVZGGPSWCI6mdNF4451k7omsPoWMtUGzKPj5GfDspXk_AIcxhsA0T9Q6YqYOq9LiiDuQ0bwkCQHV5YfbLnivewJVqBkQdfc6ac0C_SQFWifpcWuuue-VCwU4VXlqFP2QwpmD197iJadXl1BTDhPh19tv15O25WSdW4COvrDSSiFoeB1F6VD3qW4U0lNYlGgkSdRuvZvdV1sQ4hmV9q2YJXVzmaGFOO0giv6KlM8p7sM" />
    </a>
  </div>
</header>

<main className="w-full pt-20">

  {/* HERO SECTION (Generous whitespace, elegant typography, serene confidence) */}
  <section className="w-full py-16 lg:py-20 bg-white border-b border-slate-200">
    <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
      
      {/* Eyebrow Text */}
      <div className="text-[11px] font-bold tracking-widest uppercase text-brand mb-6">
        Sistema de Voz para Ventas B2B
      </div>

      {/* Headline: Ample line height, zero noise, high authority */}
      <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-[72px] lg:leading-[1.05] text-slate-950 tracking-[-0.04em] mb-8 max-w-4xl">
        Integra A Tu Nueva <br className="hidden md:block" /><span className="text-brand italic">Superestrella De Ventas.</span>
      </h1>

      {/* Subtitle: Dan Kennedy direct response style */}
      <p className="text-lg sm:text-xl text-slate-500 font-normal leading-relaxed max-w-3xl mb-12">
        Deja de quemar presupuesto en leads que se enfrían por responder tarde. Nuestro sistema de voz inteligente filtra a los curiosos y te entrega compradores listos en tu CRM.
      </p>

      {/* CTAs: High Impact */}
      <div className="flex flex-col items-center justify-center w-full sm:w-auto">
        <a className="inline-flex items-center justify-center h-12 px-8 rounded bg-brand hover:bg-brand-hover text-white text-base font-bold transition-all duration-300 ease-out active:scale-[0.98] w-full sm:w-auto shadow-lg shadow-brand/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white" href="#contacto">
          Quiero Mi Superestrella de Ventas
        </a>
        
        {/* Risk Reversal Micro-copy */}
        <div className="mt-4 flex items-center justify-center text-[11px] font-medium text-slate-500">
          <span className="material-symbols-outlined text-[14px] scale-[0.55] -mx-0.5">verified</span>
          <span className="translate-y-[1px]">Adaptado a tu proceso comercial.</span>
        </div>
      </div>

      {/* Trust Bar (Social Proof) */}
      <div className="w-full pt-16 mt-16 border-t border-slate-100 flex flex-col items-center">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center mb-6">
          Se integra a la perfección con tu ecosistema actual
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14 grayscale opacity-60">
          <span className="font-display font-bold text-xl text-slate-900 tracking-tight">HubSpot</span>
          <span className="font-display font-bold text-xl text-slate-900 tracking-tight">WhatsApp</span>
          <span className="font-display font-bold text-xl text-slate-900 tracking-tight">GoHighLevel</span>
          <span className="font-display font-bold text-xl text-slate-900 tracking-tight">Bitrix24</span>
          <span className="font-display font-bold text-xl text-slate-900 tracking-tight">Zapier</span>
        </div>
      </div>

    </div>
  </section>

  {/* METRICS BAR (Calm, spacious, editorial) */}
  <section className="w-full bg-slate-50 border-b border-slate-200 py-12 lg:py-16">
    <div className="max-w-5xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-center md:text-left">
        
        <div className="md:pr-10 lg:pr-12">
          <div className="font-display text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight mb-3 tabular-nums">
            &lt; 60 seg
          </div>
          <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-1.5">
            Contacto Inmediato
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Llama a tu lead mientras <strong className="font-medium text-slate-900">sigue en tu página web</strong>.
          </p>
        </div>

        <div className="md:px-10 lg:px-12 md:border-l border-slate-200">
          <div className="font-display text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight mb-3 tabular-nums">
            4x
          </div>
          <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-1.5">
            Más Conversión
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Responder en el primer minuto incrementa un <strong className="font-medium text-slate-900">391%</strong> tus cierres (Estudio: Harvard).
          </p>
        </div>

        <div className="md:pl-10 lg:pl-12 md:border-l border-slate-200">
          <div className="font-display text-3xl lg:text-4xl font-bold text-brand tracking-tight mb-3 tabular-nums">
            65%
          </div>
          <div className="text-[11px] uppercase tracking-wider font-semibold text-brand/80 mb-1.5">
            Tiempo Recuperado
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Cero marcación manual. Tu equipo dedica el <strong className="font-medium text-slate-900">100% de su tiempo</strong> a vender.
          </p>
        </div>

      </div>
    </div>
  </section>

  {/* PROBLEM VS SOLUTION (Clean, spacious cards, no visual clutter) */}
  <section className="w-full py-28 lg:py-36 bg-white border-b border-slate-200" id="desafio">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="max-w-2xl mb-16 lg:mb-20 text-left">

        <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-[-0.025em] mb-4 text-balance">
          La lentitud al responder destruye tu tasa de conversión.
        </h2>
        <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed">
          Tus prospectos evalúan alternativas en minutos. Si tardas horas en contactarlos, cierran con el competidor que respondió primero.
        </p>
      </div>

      {/* Comparison Cards (Airy, clean, spacious) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-stretch text-left">
        
        {/* Traditional Card */}
        <div className="bg-slate-50 rounded-lg ring-1 ring-slate-200 p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="pb-5 mb-8 border-b border-slate-200">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Prospección Manual</span>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-base font-semibold text-slate-900 mb-2">Respuesta tardía (<strong className="font-bold text-slate-900">4 a 24 horas</strong>)</h4>
                <p className="text-sm text-slate-500 leading-relaxed">El prospecto se enfría, evalúa otras marcas y deja de responder.</p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-slate-900 mb-2">70% del tiempo de vendedores perdido</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Tu equipo marcando números que no atienden o buzones de voz.</p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-slate-900 mb-2">Presupuesto publicitario quemado</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Leads con alta intención perdidos únicamente por falta de inmediatez.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Magnético Card */}
        <div className="bg-white rounded-lg ring-1 ring-slate-200 p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="pb-5 mb-8 border-b border-slate-200">
              <span className="text-xs uppercase tracking-wider font-semibold text-brand">Tu Superestrella AI</span>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-base font-semibold text-slate-900 mb-2">Llamada instantánea en 60 segundos</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Tu agente entra en acción en el momento exacto en que envían su formulario.</p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-slate-900 mb-2" style={{textWrap: "balance"}}>Calificación inteligente con IA</h4>
                <p className="text-sm text-slate-500 leading-relaxed">El agente mantiene una conversación natural que valida presupuesto, urgencia y perfil comercial.</p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-slate-900 mb-2" style={{textWrap: "balance"}}>CRM limpio y leads listos</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Filtramos la base de datos para que tu equipo solo invierta tiempo en quienes van a comprar.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/* 3-STEP PROCESS (Generous white space, uncluttered cards) */}
  <section className="w-full py-28 lg:py-36 bg-slate-50 border-b border-slate-200" id="proceso">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="max-w-2xl mb-16 lg:mb-20 text-left">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
          Proceso Simple
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-[-0.025em] mb-4 text-balance">
          Tres pasos para acelerar tus ventas.
        </h2>
        <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed">
          Sin fricción técnica ni meses de desarrollo: activamos una respuesta comercial inmediata para tu empresa.
        </p>
      </div>

      {/* 3 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-left mb-12">
        
        <div className="bg-white p-8 lg:p-10 rounded-lg ring-1 ring-slate-200 flex flex-col justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-brand mb-6">
              Paso 01
            </div>
            <h3 className="font-display text-xl font-bold text-slate-950 mb-3 text-balance">
              Captación Inmediata
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              El prospecto envía un formulario y recibe una llamada en menos de 60 segundos.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-400">
            Respuesta al instante
          </div>
        </div>

        <div className="bg-white p-8 lg:p-10 rounded-lg ring-1 ring-slate-200 flex flex-col justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-brand mb-6">
              Paso 02
            </div>
            <h3 className="font-display text-xl font-bold text-slate-950 mb-3 text-balance">
              Tu Superestrella Entra en Acción
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Tu agente de voz dedicado conversa de manera fluida para validar interés, presupuesto y urgencia real.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-400">
            Filtro automático
          </div>
        </div>

        <div className="bg-white p-8 lg:p-10 rounded-lg ring-1 ring-slate-200 flex flex-col justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-brand mb-6">
              Paso 03
            </div>
            <h3 className="font-display text-xl font-bold text-slate-950 mb-3 text-balance">
              CRM Limpio y Transferencia
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Actualizamos automáticamente tu CRM etiquetando solo a los leads listos para que tu equipo cierre la venta.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-400">
            Entrega calificada
          </div>
        </div>

      </div>

    </div>
  </section>

  {/* CAPABILITIES (Calm, structured, clear) */}
  <section className="w-full py-28 lg:py-36 bg-white border-b border-slate-200" id="capacidades">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="max-w-2xl mb-16 lg:mb-20 text-left">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
          Infraestructura
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-[-0.025em] mb-4 text-balance">
          Integrado en tu operación comercial sin complicaciones.
        </h2>
        <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed">
          Tecnología probada y segura para conectarse con las herramientas que ya utilizas día a día.
        </p>
      </div>

      {/* 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-left">
        
        <div className="bg-slate-50 p-8 rounded-lg ring-1 ring-slate-200">
          <h3 className="font-display text-lg font-bold text-slate-950 mb-3">Conexión con tu CRM</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Sincronización en tiempo real con tu base de datos comercial y las herramientas que ya usa tu equipo.
          </p>
        </div>

        <div className="bg-slate-50 p-8 rounded-lg ring-1 ring-slate-200">
          <h3 className="font-display text-lg font-bold text-slate-950 mb-3">Seguridad y Privacidad</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Cumplimiento normativo estricto y protección absoluta de la información de tus prospectos.
          </p>
        </div>

        <div className="bg-slate-50 p-8 rounded-lg ring-1 ring-slate-200">
          <h3 className="font-display text-lg font-bold text-slate-950 mb-3">Diseño a tu medida</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Cada agente se construye específicamente para tu industria, tu proceso comercial y tu forma de vender.
          </p>
        </div>

      </div>
    </div>
  </section>

  {/* BOOKING / CONTACT (Spacious, airy form layout) */}
  <section className="w-full py-28 lg:py-36 bg-white" id="contacto">
    <div className="max-w-lg mx-auto px-6">
      
      <div className="text-center mb-16 lg:mb-20">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-[-0.03em] leading-tight">
          Integra a tu <span className="text-brand italic">superestrella de ventas</span> hoy.
        </h2>
      </div>

      <div className="bg-white rounded-lg ring-1 ring-slate-200 p-8 sm:p-10 text-left w-full">
        <h3 className="font-display text-xl font-bold text-slate-950 mb-1 text-center">Solicitar más información</h3>
        <p className="text-sm text-slate-500 mb-8 text-center">Completa tus datos y nos pondremos en contacto contigo.</p>

        <form onSubmit={(e) => { e.preventDefault(); document.getElementById("simpleForm")?.classList.add("hidden"); document.getElementById("simpleSuccess")?.classList.remove("hidden"); }}>
          <div className="space-y-5" id="simpleFields">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Nombre completo</label>
              <input id="name" className="w-full h-10 px-4 text-sm rounded border border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:border-transparent transition-colors" placeholder="Tu nombre" required type="text" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Email corporativo</label>
              <input id="email" className="w-full h-10 px-4 text-sm rounded border border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:border-transparent transition-colors" placeholder="tu@empresa.com" required type="email" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Teléfono móvil</label>
              <input id="phone" className="w-full h-10 px-4 text-sm rounded border border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:border-transparent transition-colors" placeholder="+34 600 000 000" required type="tel" />
            </div>
            <div className="pt-3">
              <button className="w-full h-10 rounded bg-brand hover:bg-brand-hover text-white text-sm font-semibold tracking-tight transition-all duration-300 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white cursor-pointer" type="submit">
                Solicitar más información
              </button>
            </div>
          </div>

          <div className="hidden py-8 text-center space-y-3" id="simpleSuccess">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[24px]" aria-hidden="true">check</span>
            </div>
            <h4 className="font-display text-base font-bold text-slate-950">¡Solicitud recibida!</h4>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">Un especialista de nuestro equipo te contactará pronto.</p>
          </div>
        </form>
      </div>

    </div>
  </section>

</main>

<footer className="w-full bg-white border-t border-slate-200 py-10 text-slate-500">
  <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center text-xs text-slate-400">
    © 2025 Marketing Magnético. Todos los derechos reservados.
  </div>
</footer>


    </div>
  );
}

export default App;
