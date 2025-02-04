import { showFormattedDate } from '../utils';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';

/**
 * Component to show CardItem
 *
 * @component
 * @param {Object} props - Component props
 * @param {Number} props.id - Unique ID for delete and archive
 * @param {String} props.title - Title for the note
 * @param {String} props.body - Body for the note
 * @param {Date} props.createdAt - Date created for the note
 * @param {Boolean} props.isArchived - Boolean for conditional rendering
 * 
 * 
 */

const CardItem = ({
    id,
    title,
    body,
    createdAt,
    onDelete,
    onArchive,
    isArchived,
}) => (
    <div className="md:mx-0 mx-6 p-4 pb-2 h-72 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 justify-between flex flex-col">
        <div className="flex-grow">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                {title}
            </h5>
            <p className="dark:text-gray-400 mb-4">{showFormattedDate(createdAt)}</p>
            <p className="font-normal dark:text-white line-clamp-5 break-words">
                {body}
            </p>
        </div>

        <div className="flex">
            <DeleteButton onDelete={onDelete} id={id} />
            <ArchiveButton onArchive={onArchive} id={id} isArchived={isArchived} />
        </div>
    </div>
);

export default CardItem;
