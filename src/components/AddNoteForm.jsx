import { useState } from 'react';

/**
 * Component for rendering add note form
 *
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.addNote - Callback function to add new note
 *
 * @returns {JSX.Element} AddNoteForm Element
 */
const AddNoteForm = ({ addNote }) => {
    const maxTitleLength = 50;
    const [formData, setFormData] = useState({ title: '', body: '' });
    const [characterCount, setCharacterCount] = useState(maxTitleLength);

    /**
     * Handles form input changes and update the state 
     * Calculates the remaining character count for the title input
     *
     * @param {Object} e - Event object from input field
     * @param {String} e.target.name - Name of the input field
     * @param {String} e.target.value - Value of the input field
     * @returns {void}
     */
    const onFormChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        if (name === 'title') {
            setCharacterCount(maxTitleLength - value.length);
        }
    };

    /**
     * Handles form submission, adds a new note, and reset the form
     *  
     * @param {Object} e - Event object from the input field
     * @returns {void} 
     */
    const onSubmitForm = (e) => {
        e.preventDefault();
        addNote(formData);
        setFormData({ title: '', body: '' });
        setCharacterCount(maxTitleLength);
    };

    return (
        <div className="max-w-[34rem] md:mx-auto mb-4 mx-6 md:mt-4">
            <h2 className="text-white font-bold text-2xl mb-4">Create Note</h2>
            <p className="text-end text-white md:text-base text-sm">
                Title Remaining Characters: {characterCount}
            </p>
            <form
                onSubmit={onSubmitForm}
                className="text-white bg-gray-800 p-4 gap-4 flex flex-col">
                <input
                    placeholder="Write your title here..."
                    className="p-2 px-4 w-full border rounded-sm border-white "
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={onFormChangeHandler}
                    required
                    maxLength={50}
                />
                <textarea
                    placeholder="Write your body here..."
                    className="p-2 px-4 w-full border border-white  rounded-sm resize-none"
                    type="text"
                    name="body"
                    id="body"
                    rows={6}
                    value={formData.body}
                    onChange={onFormChangeHandler}
                    required
                />

                <button
                    className="bg-white text-black p-1 rounded-sm cursor-pointer"
                    type="submit">
                    Create
                </button>
            </form>
        </div>
    );
};

export default AddNoteForm;
