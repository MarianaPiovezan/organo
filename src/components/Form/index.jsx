import { useState } from "react"
import { Button } from "../Button"
import { Select } from "../Select"
import { TextInput } from "../TextInput"
import { PropTypes } from 'prop-types';
import './Form.css'

export const Form = (props) => {
    const [name, setName ] = useState('');
    const [proffession, setProffession] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const onSave = (event) => {
        event.preventDefault()
        props.onRegisteredEmployee({
            name,
            proffession,
            image,
            team,
        })

        setName('')
        setProffession('')
        setImage('')
        setTeam('')
    }

 

    return (

        <section className="form">

            <form onSubmit={onSave} action="">
                <h2>Prencha os dados para criar o card do colaborador</h2>
                <TextInput required={true} label="Nome:" placeholder="Insira o nome "
                value={name}
                onChange={ value => setName(value)} />
                <TextInput required={true}  label="Cargo:" placeholder="Insira o cargo" 
                value={proffession}
                onChange={ value => setProffession(value)}
                />
                <TextInput label="Imagem:" placeholder="Insira a URL da imagem"
                value={image}
                onChange={ value => setImage(value)}
                 />
                <Select required={true}  label="Time:" itens={props.teams}
                value={team}
                onChange={ value => setTeam(value)}
                 />
                <Button >
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

Form.propsTypes = {
    // onRegisteredEmployee : PropTypes.func,
    // teams: PropTypes.string
}