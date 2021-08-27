  import './Form.module.scss';
import { useForm } from "react-hook-form";

export const Form = () => {
    const { register, handleSubmit, watch, formState: { errors }} = useForm();

    const onSubmit = data => {
        let formData = new FormData();

        formData.append('firstname', data.firstname);
        formData.append('lastname', data.lastname);
        formData.append('zipcode', data.zipcode);
        formData.append('email', data.email);

        let options = {
            method: 'POST',
            body: formData
        }

        try {
            const url = "https://api.mediehuset.net/snippets/contact"
            fetch(url, options)
                .then(response => response.json())
                .then(data => console.log(data))

        } 
        catch(error) {
            console.error(error);
        }        
    };

    return (
        <>
            <h1>Formular</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstname">Fornavn:</label>
                    <input type="text" name="firstname" {...register('firstname', {required: true})} />
                    {errors.firstname && <span className="error">Du skal indtaste dit fornavn</span>}
                </div>
                <div>
                    <label htmlFor="lastname">Efternavn:</label>
                    <input type="text" name="lastname" {...register('lastname')} />
                </div>
                <div>
                    <label htmlFor="zipcode">Postnummer:</label>
                    <input type="number" name="zipcode" {...register('zipcode', {required: true, pattern: /^[0-9]+$/i })} />
                    {errors.zipcode && <span className="error">Du skal indtaste dit postnummer</span>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" {...register('email', {required: true })} />
                    {errors.email && <span className="error">Du skal indtaste din email adresse</span>}
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </>
    )
}