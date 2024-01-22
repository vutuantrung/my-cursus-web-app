export const StudentThought = ({ name, thought, avatar }: { name: string; thought: string; avatar: string }) => {
    return (
        <div className="item">
            <div className="fcrse_4 mb-20">
                <div className="say_content">
                    <p>{thought}</p>
                </div>
                <div className="st_group">
                    <div className="stud_img">
                        <img src={avatar} alt="" />
                    </div>
                    <h4>{name}</h4>
                </div>
            </div>
        </div>
    );
};
