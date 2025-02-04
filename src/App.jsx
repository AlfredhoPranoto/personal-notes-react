import { useState } from 'react';
import Navbar from './components/navbar';
import { getInitialData } from './utils';
import ActiveList from './components/ActiveList';
import ArchivedList from './components/ArchiveList';
import AddNoteForm from './components/AddNoteForm';
import Footer from './components/Footer';

/**
 * Main personal note application and main logic of the application
 * @returns {JSX.Element} Main Application Element
 */

function App() {
    // State for notes to fetch all notes data as the default value
    const [notes, setNotes] = useState(getInitialData());
    // State for search input value
    const [search, setSearch] = useState('');

    /**
     * Handles the deleting of note based of the ID of the note
     * @param {Number} id - Unique ID of the note to be deleted
     * @returns {void}
     */
    const deleteNoteHandler = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    /**
     * Handles to archive a note
     * @param {Number} id - Unique ID of the note to be archive
     * @returns {void}
     */
    const archiveNoteHandler = (id) => {
        setNotes(
            notes.map((note) =>
                note.id === id ? { ...note, archived: !note.archived } : note
            )
        );
    };

    /**
     * Handles to add new note to the state
     * @param {String} title - Title of the note to be added
     * @param {String} body - Body of the note to be added
     * @returns {void}
     */
    const addNoteHandler = ({ title, body }) => {
        const newNote = {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
        };
        setNotes((prevNotes) => [...prevNotes, newNote]);
    };

    /**
     * Handle the search input value and set the state
     * @param {String} searchTerm - Value of the search input
     * @returns {void}
     */
    const searchNoteHandler = (searchTerm) => {
        setSearch(searchTerm);
    };

    /**
     * A temporary array to filter the notes based of the searching value
     */
    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <header>
                <Navbar searchNote={searchNoteHandler} />
            </header>
            <main className="pt-[72px]">
                <div className="max-w-screen-lg lg:mx-auto md:mx-4 py-4">
                    <AddNoteForm addNote={addNoteHandler} />
                    <h2 className="text-2xl text-white font-bold md:mx-0 mx-4 mb-4">
                        Active Notes
                    </h2>
                    <ActiveList
                        notes={filteredNotes}
                        onDelete={deleteNoteHandler}
                        onArchive={archiveNoteHandler}
                    />
                    <h2 className="text-2xl text-white font-bold md:mb-4 md:mx-0 mx-4 my-4">
                        Archived Notes
                    </h2>
                    <ArchivedList
                        notes={filteredNotes}
                        onDelete={deleteNoteHandler}
                        onArchive={archiveNoteHandler}
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
