import { ArcTimeline } from "../components/magicui/arc-timeline";

const TimeLine = () => {

    const data = [
        {
            time: "2025",
            steps: [
            { icon: <span>🚀</span>, content: "Launched v1" },
            { icon: <span>✨</span>, content: "Improved UX" },
            ],
        },
        {
            time: "2026",
            steps: [{ icon: <span>📈</span>, content: "Growth" }],
        },
    ];

    return (
        <div>
            <ArcTimeline data={data} />
        </div>
    )
}

export default TimeLine
