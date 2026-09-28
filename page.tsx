
'use client';

import {motion} from "framer-motion";
import {Cpu,Database,Activity,Factory, Github, Mail} from "lucide-react";

const systems=[
["SENSOR NETWORK",Activity],
["DATA ENGINE",Database],
["AI MODEL",Cpu],
["SMART FACTORY",Factory]
];

export default function Home(){

return <main className="grid min-h-screen">

<nav className="fixed top-0 w-full glass p-6 flex justify-between z-20">
<b><span className="text-cyan-400">JH</span> SIGNAL FORGE</b>
<div className="text-slate-300">ABOUT　PROJECTS　CONTACT</div>
</nav>

<section className="min-h-screen flex items-center px-8 md:px-32">
<div className="grid md:grid-cols-2 gap-20 items-center">

<div>
<p className="text-cyan-400 tracking-[8px]">INDUSTRIAL AI // 2026</p>

<h1 className="text-6xl md:text-8xl font-black mt-8">
Jahid<br/><span className="gradient">Hassan</span>
</h1>

<h2 className="text-3xl mt-8">
Machine Learning Engineer
</h2>

<p className="text-slate-400 text-lg mt-6 max-w-xl">
Building intelligent systems that convert industrial signals into predictive decisions, smart manufacturing insights and AI-powered solutions.
</p>

<div className="mt-10 flex gap-4">
<button className="bg-cyan-400 text-black px-8 py-3 rounded-xl font-bold">
Explore Work
</button>
<button className="glass px-8 py-3 rounded-xl">
GitHub
</button>
</div>

</div>

<motion.div
animate={{y:[0,-25,0]}}
transition={{duration:4,repeat:Infinity}}
className="glass glow rounded-3xl p-8">

<h3 className="text-cyan-400 tracking-widest mb-6">
AI INTELLIGENCE CORE
</h3>

{systems.map(([name,Icon]:any)=>
<div key={name} className="glass p-5 rounded-xl mb-4 flex gap-4 items-center">
<Icon className="text-cyan-400"/>
{name}
</div>
)}

</motion.div>

</div>
</section>


<section className="px-8 md:px-32 py-24">
<h2 className="text-5xl font-bold">
Featured Systems
</h2>

<div className="grid md:grid-cols-2 gap-8 mt-10">

<div className="glass rounded-3xl p-8">
<h3 className="text-2xl font-bold">ForgeFlow MES</h3>
<p className="text-slate-400 mt-4">
Smart Manufacturing Execution System with production, machine, quality and maintenance intelligence.
</p>
</div>

<div className="glass rounded-3xl p-8">
<h3 className="text-2xl font-bold">Predictive Maintenance AI</h3>
<p className="text-slate-400 mt-4">
Machine health prediction using sensor data and machine learning.
</p>
</div>

</div>
</section>


<section className="px-8 md:px-32 py-24">
<h2 className="text-5xl font-bold">Open Signal</h2>
<div className="glass rounded-3xl p-8 mt-8 flex gap-8">
<Github/> github.com/jahid-hassan3
<Mail/> Contact
</div>
</section>

</main>
}
