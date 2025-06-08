import React, { useState } from 'react'
import axios from 'axios'

export default function CalculatorForm() {
  const [form, setForm] = useState({
    from_address: '',
    to_address: '',
    delivery_type: '',
    transport_type: '',
    weight: 1
  })
  const [result, setResult] = useState<{price: number, delivery_time: string}|null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setResult(null)
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/calculate`, {
        ...form,
        weight: Number(form.weight)
      })
      setResult(data)
    } catch (e) {
      alert('Ошибка расчёта стоимости')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg max-w-xl mx-auto p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Калькулятор стоимости доставки</h2>
      <div className="flex gap-2 mb-2">
        <input name="from_address" placeholder="Город отправления" className="input" onChange={handleChange} required />
        <input name="to_address" placeholder="Город назначения" className="input" onChange={handleChange} required />
      </div>
      <div className="flex gap-2 mb-2">
        <select name="delivery_type" className="input" onChange={handleChange} required>
          <option value="">Тип доставки</option>
          <option value="express">Экспресс</option>
          <option value="fast">Быстрая</option>
          <option value="standard">Стандартная</option>
          <option value="scheduled">По расписанию</option>
        </select>
        <select name="transport_type" className="input" onChange={handleChange} required>
          <option value="">Способ доставки</option>
          <option value="foot">Пешком</option>
          <option value="bike">Велокурьер</option>
          <option value="car">Легковой автомобиль</option>
          <option value="van">Коммерческий транспорт</option>
        </select>
        <input name="weight" type="number" min="0" step="0.1" placeholder="Вес (кг)" className="input" value={form.weight} onChange={handleChange} />
      </div>
      <button type="submit" className="btn-orange w-full">Рассчитать стоимость</button>
      {result && (
        <div className="mt-4 p-3 rounded bg-orange-100 text-orange-800 font-semibold">
          Стоимость: <b>{result.price} ₽</b><br />
          Время доставки: {result.delivery_time}
        </div>
      )}
    </form>
  )
}
