import Card from "../Card";
import profile1 from "../asset/profile.jpg";
import profile2 from "../asset/tshop.png";
import profile3 from "../asset/book.jpg";
import post1 from "../asset/pak.jpg";
import post2 from "../asset/toys.webp";
import post3 from "../asset/post2.jpg";
import './index.css';


function Page() {
    return (
        <div className="Page">
             <Card
                profile={profile3}
                name="bookshop_official"
                post={post3}
                likes="100 likes"
                text="Read what you want, where you want"
                pageName="bookshop_official"
                comment="View all comments"
                date={"2 months ago"}
            />
            <Card
                profile={profile1}
                name="faryajamal"
                post={post1}
                likes="100 likes"
                text="hAPPY Independence Day"
                pageName="faryajamal"
                comment="View all comments"
                date={"14 August"}
            />
            <Card
                profile={profile2}
                name="toymartpk"
                post={post2}
                likes="100 likes"
                text="Stock Alert!"
                pageName="toymartpk"
                comment="View all 79 comments"
                date={"1 month ago"}
            />
            <Card
                profile={profile3}
                name="bookshop_official"
                post={post3}
                likes="100 likes"
                text="Read what you want, where you want"
                pageName="bookshop_official"
                comment="View all comments"
                date={"2 months ago"}
            />

        </div>
    );
}

export default Page;
