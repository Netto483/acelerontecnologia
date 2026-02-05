 import useScrollReveal from "@/hooks/useScrollReveal";
 import freezerBackground from "@/assets/freezer-background.png";
 
 const FreezerMonitorSection = () => {
   const { ref, isVisible } = useScrollReveal();
 
   return (
     <section 
       ref={ref as React.RefObject<HTMLElement>}
       className={`h-[490px] relative flex items-center overflow-hidden transition-all duration-700 ${
         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
       }`}
     >
       {/* Background image */}
       <div 
         className="absolute inset-0 bg-cover bg-center"
         style={{ backgroundImage: `url(${freezerBackground})` }}
       />
       {/* Dark overlay */}
       <div className="absolute inset-0 bg-black/60" />
       
       <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
         <div className="max-w-3xl">
           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
             Para Supermercados, Frigoríficos e Distribuidoras alimentícias
           </h2>
           <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
             Freezers não escolhem horário para quebrar. Durante a noite, um simples desligamento pode destruir todo o estoque congelado antes do primeiro funcionário chegar. Quando o problema é percebido, o prejuízo já está feito.
           </p>
         </div>
       </div>
     </section>
   );
 };
 
 export default FreezerMonitorSection;