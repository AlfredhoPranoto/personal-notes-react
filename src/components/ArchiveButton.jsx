/**
 * Component for rendering a Archive Button that triggers the onArchive callback
 *
 * @component
 * @param {Object} props - Component props
 * @param {Number} props.id - Unique ID for the note to be deleted
 * @param {Function} props.onArchive - Callback function to archive a post
 * @param {Boolean} props.isArchived - Boolean for conditional rendering button text
 *
 * @returns {JSX.Element} Archive Button Element
 */

const ArchiveButton = ({ id, onArchive, isArchived }) => (
    <button
        onClick={() => onArchive(id)}
        type="button"
        className="w-full focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 cursor-pointer">
        {isArchived ? 'Active' : 'Archive'}
    </button>
);

export default ArchiveButton;
