import { useState } from 'react'

const FeedbackForm = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [comentario, setComentario] = useState("")

    const atualizarNome = (e) => {
        setNome(e.target.value)
    };

    const atualizarEmail = (e) => {
        setEmail(e.target.value)
    };

    const atualizarComentario = (e) => {
        setComentario(e.target.value)
    }

    const alertar = (e) => {
        e.preventDefault();
        const form = e.target

        if (!nome || !email || !comentario){
            alert("Formulário não enviado, digite corretamente os campos!")
        }else{
        alert(
            `
             Formulário enviado com sucesso!
             Nome: ${nome}
             E-mail: ${email}
             Descrição: ${comentario}`
             
            )
            form.reset()
        }
    }

    return (
        <>
            <div className='container-form'>
                    <form className="form" onSubmit={alertar}>
                        <h1 className='h1-form'>Pesquisa de feedback do cliente</h1>
                        <h2>Nome</h2>
                        <input
                            type="text" 
                            onChange={atualizarNome}
                            required
                        />
                        <h2>Seu e-mail</h2>
                        <input
                            type="email"
                            onChange={atualizarEmail}
                            required
                        />
                        <h2>Deixe um comentário sobre sua avaliação.</h2>
                        <textarea 
                            name="comentario" 
                            rows="8" 
                            onChange={atualizarComentario}>
                        </textarea>
                        <button type="submit">Enviar feedback</button>
                    </form>
            </div>
        </>
    );
};

export default FeedbackForm