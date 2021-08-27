import { useContext } from 'react'
import { doFetch } from '../../helpers/Fetch'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../components/login/AuthProvider'

export const CommentsForm = () => {
    const { register, handleSubmit, watch, formState: { errors }} = useForm();
    const { loginData } = useContext(AuthContext)

    const onSubmit = async data => {
        let formData = new FormData();
        const token = loginData.access_token

        formData.append('title', data.title);
        formData.append('comment', data.comment);
        formData.append('item_id', 1);

            const options = {
                method: 'POST',
                headers: {
                    'Authorization' : `Baerer ${loginData.access_token}`
                },
                body: formData
            }
    
            const url = 'https://api.mediehuset.net/snippets/comments'
            const result = await doFetch(url, options)
            console.log(result);
        };

    return (
        <>
            <h1>Formular</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Titel:</label>
                    <input type="text" name="title" {...register('title', {required: true})} />
                    {errors.title && <span className="error">Du skal indtaste en titel</span>}
                </div>
                <div>
                    <label htmlFor="comment">Kommentar:</label>
                    <textarea name="comment" id="" cols="30" rows="10" {...register('comment', {required: true})}></textarea>
                    {errors.comment && <span className="error">Du skal skrive en kommentar</span>}
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </>
    )
}