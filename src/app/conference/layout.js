export default function ConferencesLayout({children}){

    return ( <section className="bg-gray-800">
        <nav >Nav conf</nav>
        <div>{children}</div>
    </section> );

}