/**
 * Component for rendering navigation bar and search input
 *
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.searchNote - Callback function for searching note
 * @returns {JSX.Element} Navbar Element
 */

const Navbar = ({ searchNote }) => {
    /**
     * Handles the callback with value from the input form
     * @param {Object} e - Event object from input form
     * @param {String} e.target.value - Value of the input form
     */
    const searchHandler = (e) => {
        searchNote(e.target.value);
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
                <a
                    href="#"
                    className="text-lg md:text-2xl font-semibold dark:text-white">
                    Personal Notes
                </a>
                <div className="flex dark:bg-gray-700 dark:border-gray-600 rounded-lg">
                    <input
                        type="text"
                        id="website-admin"
                        className="md:w-full w-24 text-sm p-2.5 dark:placeholder-gray-400 dark:text-white "
                        placeholder="Search Note Title..."
                        onChange={searchHandler}
                    />
                    <svg
                        className="h-4 w-4 my-auto mx-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path
                            fill="#ffffff"
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                        />
                    </svg>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
