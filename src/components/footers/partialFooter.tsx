function PartialFooter() {
    return (
        <footer className="flex flex-col justify-center text-[6px] gap-1.5 md:flex-row md:justify-between md:text-[20px] proximaNova px-[30px] md:px-32">
            <div className="md:flex md:flex-col">
                <p className="flex justify-center uppercase md:justify-start">© 2025 kangue kwelle patrick loic</p>
                <p className="hidden md:inline">This website is genuine and product of my creativity</p>
            </div>
            <div className="flex flex-col gap-1.5">
                <p className="flex justify-center md:justify-end">Weather in Douala: Rain, 24.00°C</p>
                <p className="flex justify-center md:justify-end">Time in Douala: 00 : 30 PM</p>
            </div>
        </footer>
    );
}

export default PartialFooter;