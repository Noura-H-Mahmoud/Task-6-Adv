import section2 from "../assets/images/sec2.png";
import section3 from "../assets/images/sec3.png";
import section4 from "../assets/images/sec4.png";
import section5 from "../assets/images/sec5.png";
import section6 from "../assets/images/sec6.png";
import section7 from "../assets/images/sec7.png";
import section8 from "../assets/images/sec8.png";
import section9 from "../assets/images/sec9.png";
import section10 from "../assets/images/sec10.png";

export const sections = () => [
    {
        id: 1,
        content: `
        <div class='flex flex-col gap-3'>
            <p class='text-textColor dark:text-textDarkColor'>If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.</p>
            <b class='font-bold text-center w-[72.88%] m-auto text-textColor dark:text-textDarkColor'>Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.</b>
        </div>
        `
    },
    {
        id: 2,
        img: section2,
        content: `
        <div class='flex flex-col gap-3'>
            <p class='text-textColor dark:text-textDarkColor text-center w-[72.88%] m-auto'>Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.</p>
            <ul>
                <li class='text-textColor dark:text-textDarkColor mb-3'>There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.</li>
                <li class='text-textColor dark:text-textDarkColor mb-3'>Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.</li>
                <li class='text-textColor dark:text-textDarkColor mb-3'>Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.</li>
                <li class='text-textColor dark:text-textDarkColor mb-3'>Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.</li>
            </ul>
            <h4 class='text-lg font-bold text-textColor dark:text-textDarkColor'>Breaking Down the Grid</h4>
            <p class='text-textColor dark:text-textDarkColor'>Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.</p>
            <p class='text-textColor dark:text-textDarkColor'> <b class='font-bold text-textColor dark:text-textDarkColor'>Columns: </b>Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</p>
            <p class='text-textColor dark:text-textDarkColor'> <b class='font-bold text-textColor dark:text-textDarkColor'>Gutters: </b> The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.</p>
        </div>`
    },
    {
        id: 3,
        img: section3,
        content: `
            <div class='flex flex-col gap-3'>
                <p class='text-textColor dark:text-textDarkColor text-center w-[72.88%] m-auto'>Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.</p>
                <h4 class='text-lg font-bold text-textColor dark:text-textDarkColor'>Examples of Grids in Use</h4>
                <h5 class='font-bold text-textColor dark:text-textDarkColor'>Example 1: Hierarchical Grid</h5>
                <p class='text-textColor dark:text-textDarkColor'>Our first example is from <a  href="https://www.nytimes.com/" target="_blank" rel="noopener noreferrer" class='border-b-[1px] border-textColor dark:border-textDarkColor inline-block'>The New York Times</a>.This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.</p>
            </div>
            `
    },
    {
        id: 4,
        img: section4,
        content: `
            <div class='flex flex-col gap-3'>
                <p class='text-textColor dark:text-textDarkColor text-center w-[72.88%] m-auto'>The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)</p>
                <h5 class='font-bold text-textColor dark:text-textDarkColor'>Example 1: Column Grid</h5>
                <p class='text-textColor dark:text-[#C0C5D0]'>Our second example is from <a  href="https://ritual.com/" target="_blank" rel="noopener noreferrer" class='border-b-[1px] border-textColor dark:border-[#C0C5D0] inline-block'> Ritual.com</a>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.</p>
            </div>
        `
    },
    {
        id: 5,
        img: section5,
        content: `
            <div class='flex flex-col gap-3'>
                <p class='text-textColor dark:text-[#C0C5D0] text-center w-[72.88%] m-auto'>Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)</p>
                <h5 class='font-bold text-textColor dark:text-[#C0C5D0]'>Example 3: Modular Grid</h5>
                <p class='text-textColor dark:text-[#C0C5D0]'>Our third example is from <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" class='border-b-[1px] border-textColor dark:border-[#C0C5D0] inline-block'>Behance</a>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.</p>
            </div>
        `
    },
    {
        id: 6,
        img: section6,
        content: `
        <div class='flex flex-col gap-3'>
            <p class='text-textColor dark:text-[#C0C5D0] text-center w-[72.88%] m-auto indent-1'>Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)</p>
            <h5 class='font-bold text-textColor dark:text-[#C0C5D0]'>Example 4: Breaking the Grid</h5>
            <p class='text-textColor dark:text-[#C0C5D0]'>Our last example is <a href="https://m2.material.io/design/material-studies/shrine.html#product-architecture" target="_blank" rel="noopener noreferrer" class='border-b-[1px] border-textColor dark:border-[#C0C5D0] inline-block'>Shrine from Google’s Material Studies</a>. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.</p>
        </div>
        `
    },
    {
        id: 7,
        img: section7,
        content: `
        <div class='flex flex-col gap-3'>
            <p class='text-textColor dark:text-[#C0C5D0] text-center w-[72.88%] m-auto'>Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)</p>
            <h4 class='text-lg font-bold text-textColor dark:text-[#C0C5D0]'>Benefits of the Grid</h4>
            <p class='text-textColor dark:text-[#C0C5D0]'>Using a grid benefits both end users and the designers alike:</p>
            <ul class='list-disc ml-6'>
                <li class='text-textColor dark:text-[#C0C5D0]'>Designers can quickly put together well-aligned interfaces.</li>
                <li class='text-textColor dark:text-[#C0C5D0]'>Users can easily scan predictable grid-based interfaces.</li>
                <li class='text-textColor dark:text-[#C0C5D0]'>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of <a href="https://www.figma.com/exit?url=https%3A%2F%2Fwww.nngroup.com%2Farticles%2Fresponsive-web-design-definition%2F" target="_blank" rel="noopener noreferrer" class='border-b-[1px] border-textColor dark:border-[#C0C5D0] inline-block'> responsive web design </a>. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
            </ul>
        </div>
        `
    },
    {
        id: 8,
        img: section8,
        content: `
            <div class='flex flex-col gap-3'>
                <p class='text-textColor dark:text-[#C0C5D0] text-center w-[72.88%] m-auto'>At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).</p>
                <p class='text-textColor dark:text-[#C0C5D0]'>Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.</p>
                <h4 class='text-lg font-bold text-textColor dark:text-[#C0C5D0]'>Choosing and Setting Up Your Grid</h4>
                <p class='text-textColor dark:text-[#C0C5D0]'>How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>
                <p class='text-textColor dark:text-[#C0C5D0]'><b class='font-bold text-textColor dark:text-[#C0C5D0]'>Choose the right grid for your needs.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
                <p class='text-textColor dark:text-[#C0C5D0]'><b class='font-bold text-textColor dark:text-[#C0C5D0]'>Spend time setting up your grid.</b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
            </div>
        `
    },
    {
        id: 9,
        img: section9,
        content: `
            <div class='flex flex-col gap-3'>
                <p class='text-textColor dark:text-[#C0C5D0]'>Easily set the number of columns, the gutter size, and margin size in Figma.</p>
                <p class='text-textColor dark:text-[#C0C5D0]'><b class='font-bold text-textColor dark:text-[#C0C5D0]'>Always place content within columns, not gutters.</b> The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.</p>
            </div>
        `
    },
    {
        id: 10,
        img: section10,
        content: `
            <div class='flex flex-col gap-3'>
                <p class='text-textColor dark:text-[#C0C5D0] text-center w-[72.88%] m-auto'>Content or elements should be placed within and across columns, not gutters.</p>
                <p class='text-textColor dark:text-[#C0C5D0]'><b class='font-bold text-textColor dark:text-[#C0C5D0]'>Consider using an 8px grid system.</b> For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.</p>
                <h4 class='text-lg font-bold text-textColor dark:text-[#C0C5D0]'>Conclusion</h4>
                <p class='text-textColor dark:text-[#C0C5D0]'>Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.</p>
           </div>
        `
    }
];