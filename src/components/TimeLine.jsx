import { ArcTimeline } from "../components/magicui/arc-timeline";

const TimeLine = () => {

    const data = [
        {
            time: "2022",
            steps: [
            { icon: <span>💻</span>, content: "Started learning HTML & CSS" },
            { icon: <span>✍️</span>, content: "Learned with the help of the freeCodeCamp website and youtube." },
            ],
        },
        {
            time: "2023-2024",
            steps: [
                { icon: <span>📈</span>, content: "Started learning JavaScript" },
                { icon: <span>🚩</span>, content: "Struggled learning JavaScript, it felt so hard. So I lost motivation to learn and I'm not consistent back then. I thought coding was never meant for me." },
                { icon: <span>📉</span>, content: "Back then I'm also addicted with online games and only codes when I wanted"}
            ],
        },{
            time: "2025",
            steps: [
                { icon: <span>🎓</span>, content: "I graduated from Senior HighSchool"},
                { icon: <span>💫</span>, content: "After the graduation, I started all over again back from HTML, CSS, and JavaScript. I started the Full Stack Developer Curriculum in freeCodeCamp which is still in beta." },
                { icon: <span>🕒</span>, content: "During my vacation I coded every day and stayed consistent in finishing the course. And I've learned a lot again and I also started creating personal projects." }
            ]
        },{
            time: "Future",
            steps: [
                { icon: <span>🥅</span>, content: "After finishing my first year college and during the vacation. I want to do freelancing to earn my own money or maybe joining competitions like hackathons" },
                { icon: <span>🌟</span>, content: "I still have a lot to learn, so I'm coding every day to improved my skills and I hope that one day I'll achive the things that I want." }
            ]
        }
    ];

    return (
        <div>
            <ArcTimeline data={data} />
        </div>
    )
}

export default TimeLine
