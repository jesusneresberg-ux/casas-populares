'use client';

import { useState } from 'react';
import { Home, DollarSign, Calendar, Camera, Menu } from 'lucide-react';

interface Obra {
  id: number;
  endereco: string;
  status: string;
  progresso: number;
  custo: number;
  dataInicio: string;
}

export default function Dashboard() {
  const [obras] = useState<Obra[]>([
    {
      id: 1,
      endereco: 'Rua das Flores, 123',
      status: 'Em andamento',
      progresso: 45,
      custo: 85000,
      dataInicio: '2024-01-15'
    },
    {
      id: 2,
      endereco: 'Av. Central, 456',
      status: 'Em andamento',
      progresso: 70,
      custo: 92000,
      dataInicio: '2023-11-20'
    },
    {
      id: 3,
      endereco: 'Rua do Sol, 789',
      status: 'Iniciando',
      progresso: 10,
      custo: 78000,
      dataInicio: '2024-03-01'
    }
  ]);

  const totalObras = obras.length;
  const obrasEmAndamento = obras.filter(o => o.status === 'Em andamento').length;
  const custoTotal = obras.reduce((sum, o) => sum + o.custo, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary-600 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Casas Populares</h1>
          <Menu className="w-6 h-6" />
        </div>
      </header>

      {/* Stats Cards */}
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white p-4 rounded-lg shadow">
            <Home className="w-6 h-6 text-primary-600 mb-2" />
            <p className="text-2xl font-bold">{totalObras}</p>
            <p className="text-xs text-gray-600">Total Obras</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Calendar className="w-6 h-6 text-green-600 mb-2" />
            <p className="text-2xl font-bold">{obrasEmAndamento}</p>
            <p className="text-xs text-gray-600">Em Andamento</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <DollarSign className="w-6 h-6 text-blue-600 mb-2" />
            <p className="text-lg font-bold">
              {(custoTotal / 1000).toFixed(0)}k
            </p>
            <p className="text-xs text-gray-600">Investido</p>
          </div>
        </div>

        {/* Obras List */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-3">Obras Ativas</h2>
          <div className="space-y-3">
            {obras.map((obra) => (
              <div key={obra.id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{obra.endereco}</h3>
                    <p className="text-sm text-gray-600">{obra.status}</p>
                  </div>
                  <span className="text-sm font-semibold text-primary-600">
                    {obra.progresso}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all"
                    style={{ width: `${obra.progresso}%` }}
                  />
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>R$ {obra.custo.toLocaleString('pt-BR')}</span>
                  <span>Início: {new Date(obra.dataInicio).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation (placeholder) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex justify-around">
          <button className="flex flex-col items-center text-primary-600">
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Obras</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <DollarSign className="w-6 h-6" />
            <span className="text-xs mt-1">Custos</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <Calendar className="w-6 h-6" />
            <span className="text-xs mt-1">Cronograma</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <Camera className="w-6 h-6" />
            <span className="text-xs mt-1">Fotos</span>
          </button>
        </div>
      </div>
    </div>
  );
}
