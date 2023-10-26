import { motion } from "framer-motion";
import "./AboutPage.css"

export default function AboutPage() {


    return (
        <motion.div initial={{ opacity: 0, scale: 1, x:200 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1 }}> {/*https://www.framer.com/motion/examples/ */}
            <div className = "picture">
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fHww&w=1000&q=80" alt="image"></img>
            <div className="box-title">
                <p>Welcome to URBAN GATE</p>
            </div>
            </div>
            <div className="color-background-picture"></div>
            <div className="text-title">
            <p>ELEVATE YOUR LIVING EXPERIENCE</p>
            <div className="text">
            <p> Urban Gate helps you explore a wide range of available properties on the land of Montreal.
                Explore our stunning properties that cater to a wide range of preferences and budgets.
                <br></br>Start your new journey by exploring our listings. Your dream property could just be a click away.
            </p>
            </div>
            <div className="box-picture">
                <img src="https://f7e5m2b4.rocketcdn.me/wp-content/uploads/2017/11/Black-Box-House-in-Montreal-1.jpg" style={{height: "400px"}}></img>
            </div>
            </div>
        </motion.div>
    )

}