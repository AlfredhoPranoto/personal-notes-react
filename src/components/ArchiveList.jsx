import CardItem from './CardItem';

/**
 * Component for rendering Archive List when archived property is true
 *
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.notes - Array that contain all notes
 * @param {Function} props.onDelete - Callback function for deleting note
 * @param {Function} props.onArchive - Callback function for archive note
 *
 * @returns {JSX.Element} Archive List Element
 */

const ArchivedList = ({ notes, onDelete, onArchive }) => {
    const archivedNotes = notes.filter((note) => note.archived);
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 
                Check if active notes is found or not
            */}
            {archivedNotes.length > 0 ? (
                archivedNotes.map((note) => (
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
                    No archived notes found
                </p>
            )}
        </div>
    );
};

export default ArchivedList;
