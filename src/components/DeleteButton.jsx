/**
 * Component for rendering a Delete Button that triggers the onDelete callback
 *
 * @component
 * @param {Object} props - Component props
 * @param {Number} props.id - Unique ID for the note to be deleted
 * @param {Function} props.onDelete - Callback function to delete the note
 *
 * @returns {JSX.Element} Delete Button Element
 */

const DeleteButton = ({ id, onDelete }) => (
    <button
        onClick={() => onDelete(id)}
        type="button"
        className="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 cursor-pointer">
        Delete
    </button>
);

export default DeleteButton;
