import MovieForm from "../movieSearch/page"

export default function MoviesLayout({ children }) {
    return (
        <div>
            <MovieForm />
            {children}
        </div>
    )
}
