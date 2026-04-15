import React from 'react';
import { Hexagon, Triangle, Circle, Square, Diamond, Star } from 'lucide-react';
const CLIENTS = [
{
  name: 'Acme Corp',
  icon: Hexagon
},
{
  name: 'GlobalTech',
  icon: Triangle
},
{
  name: 'Idealizeer',
  icon: Circle
},
{
  name: 'Stark Ind',
  icon: Square
},
{
  name: 'Wayne Ent',
  icon: Diamond
},
{
  name: 'Umbrella',
  icon: Star
},
{
  name: 'Massive',
  icon: Hexagon
},
{
  name: 'Cyberdyne',
  icon: Triangle
}];

export function ClientsSection() {
  return (
    <section className="py-12 border-y border-white/5 bg-navy-950/50 overflow-hidden">
      <div className="layout-container mb-8">
        <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-widest">
          Trusted by 100+ innovative companies worldwide
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-900 to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {/* First set */}
          {CLIENTS.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={`client-1-${idx}`}
                className="flex items-center gap-3 mx-12 text-slate-500 hover:text-white transition-colors duration-300 grayscale hover:grayscale-0">
                
                <Icon className="w-8 h-8" />
                <span className="font-heading font-bold text-xl">
                  {client.name}
                </span>
              </div>);

          })}
          {/* Duplicate set for seamless loop */}
          {CLIENTS.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={`client-2-${idx}`}
                className="flex items-center gap-3 mx-12 text-slate-500 hover:text-white transition-colors duration-300 grayscale hover:grayscale-0">
                
                <Icon className="w-8 h-8" />
                <span className="font-heading font-bold text-xl">
                  {client.name}
                </span>
              </div>);

          })}
        </div>
      </div>
    </section>);

}