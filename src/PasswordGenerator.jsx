
import React, { useState } from 'react';
import './style/body.css'
import './style/label.css'
import './style/input.css'
import './style/container.css'
import './style/button.css'

function PasswordGenerator() {
    
    const [length, setLength] = useState(12);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeletters, setIncludeLetters] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [generatedPassword, setGeneratedPassword] = useState(true);




    const handleGeneratePassword = () => {
        let characters = '';
        if (includeNumbers) {
            characters += '0123456789';
        }


        if (includeletters) {

            characters += includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';

        }
        if (characters === '') {
            alert('selecione uma opção numeros/letras')
            return;
        }

        let password = '';

        for (let i = 0; i < length; i++) {
            const ramdomIndex = Math.floor(Math.random() * characters.length);
            password += characters.charAt(ramdomIndex);

        }
        setGeneratedPassword(password);
    }


    const handleCopyPassword = () => {
        navigator.clipboard.writeText(generatedPassword);
        alert('senhas cópiada para  área de tranferência!')
    };

    return (
        <div className='container'>
            <h1>Gerador de Senhas</h1>
            <label htmlFor="length">comprimento da senha:</label>
            <input type="number"
                id="length"
                min="6"
                max="20"
                value={length}
                onChange={(e) => setLength(e.target.value)}
            />
            <br />

            <input type="checkbox"
                id='numbers'
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
            />

            <label htmlFor="numbers"> incluir números</label>
            <br />
            <input
                type="checkbox"
                id='letters'
                checked={includeletters}
                onChange={() => setIncludeLetters(!includeletters)}
            />
            <label htmlFor="letters">incluir letras</label>
            <br />


            <input type="checkbox"
                id='uppercase'
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            <label htmlFor="uppercase">incluir letras maiúsculas</label>
            <br />
            <button onClick={handleGeneratePassword}>gerar senhas</button>

            <button onClick={handleCopyPassword} style={{ display: generatedPassword ? 'block' : 'none' }}>copiar senha</button>
            <p id='senhaGerada' >senha:{generatedPassword}</p>


        </div>
    )

}

export default PasswordGenerator;