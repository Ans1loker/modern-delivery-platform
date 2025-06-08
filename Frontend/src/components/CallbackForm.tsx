import React, { useState } from 'react'
import axios from 'axios'

export default function CallbackForm() {
  const [form, setForm] = useState({
    company_name: '',
    user_name: '',
    phone: '',
    email: '',
    description: ''
  })
  const [done, setDone] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setDone(false)
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/callback`, form)
      setDone(true)
    } catch {
      alert('Ошибка отправки заявки')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Оставить заявку на сотрудничество</h2>
      <div className="flex gap-2 mb-2">
        <input name="company_name" placeholder="Название компании" className="input" onChange={handleChange} required />
        <input name="user_name" placeholder="Ваше имя" className="input" onChange={handleChange} required />
      </div>
      <div className="flex gap-2 mb-2">
        <input name="phone" placeholder="Телефон" className="input" onChange={handleChange} required />
        <input name="email" placeholder="Email" className="input" onChange={handleChange} />
      </div>
      <textarea name="description" placeholder="Расскажите о вашей логистике" className="input w-full mb-2" rows={3} onChange={handleChange} />
      <button type="submit" className="btn-orange w-full">Отправить заявку</button>
      {done && <div className="mt-4 text-green-700 font-semibold">Спасибо! Мы свяжемся с вами.</div>}
    </form>
  )
}
