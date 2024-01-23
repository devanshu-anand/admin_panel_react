export const userCols = [
    {field: "id", headerName: "ID", width: 70},
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        }
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            );
        }
    },
]

export const userRows = [
    {
        id: 1,
        username: "Jon Snow",
        img: "https://images.bauerhosting.com/legacy/media/62ac/5b27/a428/6549/a13d/ca4e/game-of-thrones-jon-snow.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill",
        status: "active",
        email: "isSnow@gmail.com",
        age: 25
    },
    {
        id: 2,
        username: "Tirion Lannister",
        img: "https://static.toiimg.com/photo/62981209.cms",
        status: "passive",
        email: "tirion@gmail.com",
        age: 35
    },
    {
        id: 3,
        username: "Jamie Lannister",
        img: "https://tv-fanatic-res.cloudinary.com/iu/s--ivJsOFIQ--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1371229272/jaime-lannister-image.png",
        status: "pending",
        email: "jamie@gmail.com",
        age: 40
    },

];