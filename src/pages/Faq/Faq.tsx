import { Footer } from "@components/common/Footer/Footer";
import { Navbar } from "@components/common/Navbar/Navbar";
import "./Faq.css";

export function Faq() {
  const questions = {
    question1: {
      question: ">¿Qué es ARmar?",
      answer:
        "ARmar es un proyecto open-source diseñado para trackear, comparar y encontrar los mejores precios de componentes, periféricos y mobiliario de setup en tiendas argentinas. Los datos mostrados en la página son datos públicos que se encuentran gracias al scraping.",
      color: "green",
    },
    question2: {
      question: ">¿Cómo determinan si una tienda es confiable?",
      answer:
        "Evaluamos la reputación basándonos en opiniones de la comunidad, presencia en redes, reseñas de Google y experiencia directa. (Próximamente: Sistema transparente de puntuación de confianza/Trust Fact).",
      color: "yellow",
    },
    question5: {
      question: ">Soy dueñ@ de una tienda y no me gustaría estar aquí.",
      answer:
        "ARmar funciona como un buscador e indexador de ofertas. Recopilamos únicamente información de acceso público (nombres de productos, precios y stock) para ayudar a la comunidad a comparar opciones, sin ningún tipo de agresividad estilo DDOS. No cobramos comisiones ni vendemos productos: redirigimos a los usuarios directamente a tu tienda oficial para que finalicen la compra en tu sitio. Si detectás algún error en los datos de tu comercio, algo que te haga ruido o tenés dudas sobre la integración, podés contactarnos para ajustarlo u otros.",
      color: "red",
    },
    question3: {
      question: ">Ayer encontré un producto y hoy desapareció, ¿Por qué?",
      answer:
        "El motor de datos que usa ARmar tiene horarios para extraer nueva información y siempre extraerá productos que existen. Existe la posibilidad que no se haya encontrado un producto y no se muestre mas, por lo tanto se insiste en que también corroboren por su cuenta si realmente dejo de haber stock.",
      color: "red",
    },
    question4: {
      question:
        ">¿ARmar se hace cargo de los envios? ¿ARmar vende los productos?",
      answer: "No.",
      color: "red",
    },
    question6: {
      question:
        ">Tengo una tienda de computación/decoracion, ¿cómo puedo sumarme?",
      answer:
        "Podés contactar vía discord con Aike con la URL de tu sitio (Pronto habrá un formulario). Si tu tienda cumple con los criterios de transparencia y datos públicos accesibles, la evaluamos para sumarla a las ejecuciones de indexación.",
      color: "green",
    },
    question7: {
      question:
        ">¿Existen tiendas o productos patrocinados que aparezcan primero?",
      answer:
        "No. La prioridad principal de ARmar es la transparencia absoluta, ARmar vive y vivirá a través de donaciones de los usuarios, sin monetización. El ordenamiento de resultados se basa estrictamente en criterios de búsqueda y precio. Cero anuncios, cero banners patrocinados. Si a futuro el proyecto no es autosustentable con donaciones es probable que se pongan anuncios, pero no tiendas patrocinadas.",
      color: "green",
    },
  };
  return (
    <>
      <Navbar />
      <div className="faq__container">
        <div className="doted-container faq">
          {Object.entries(questions).map(([key, question]) => (
            <div
              key={key}
              id="faq__question"
              className={question.color + "-box"}
            >
              <h3>{question.question}</h3>
              <p className="nav__categorie-name">{question.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Faq;
