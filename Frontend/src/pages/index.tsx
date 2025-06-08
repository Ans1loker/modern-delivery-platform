import Layout from '../components/Layout'
import CalculatorForm from '../components/CalculatorForm'
import CallbackForm from '../components/CallbackForm'

export default function Home() {
  return (
    <Layout>
      <section>
        {/* Лендинг-hero по мотивам макета */}
        <div className="max-w-5xl mx-auto pt-32 pb-16 text-center">
          <h1 className="text-5xl font-bold mb-4">Цифровая платформа управления доставкой</h1>
          <p className="mb-6 text-lg text-gray-600">
            Мы предоставляем продавцам услуги аутсорсинга доставки: от цифровой системы управления онлайн-заказами до их доставки получателям
          </p>
        </div>
        {/* Калькулятор */}
        <CalculatorForm />
        {/* Callback form */}
        <CallbackForm />
      </section>
    </Layout>
  )
}
