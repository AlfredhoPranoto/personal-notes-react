import CardItem from './CardItem';

/**
 * Component for rendering Active List when archived property is false
 *
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.notes - Array that contain all notes
 * @param {Function} props.onDelete - Callback function for deleting note
 * @param {Function} props.onArchive - Callback function for archive note
 *
 * @returns {JSX.Element} Active List Element
 */
const ActiveList = ({ notes, onDelete, onArchive }) => {
    const activeNotes = notes.filter((note) => !note.archived);
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 
                Check if active notes is found or not
            */}
            {activeNotes.length > 0 ? (
                activeNotes.map((note) => (
                    <CardItem
                        id={note.id}
                        key={note.id}
                        onArchive={onArchive}
                        isArchived={note.archived}
                        onDelete={onDelete}
                        {...note}
                    />
                ))
            ) : (
                <p className="text-white text-xl col-span-full text-center p-8">
                    No active notes found
                </p>
            )}
        </div>
    );
};

export default ActiveList;
