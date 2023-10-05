import { motion } from "framer-motion";
import "./AboutPage.css"

export default function AboutPage() {


    return (
        <motion.div initial={{ opacity: 0, scale: 1, x:200 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1 }}>
            <div className="card" style={{height: "30vw",backgroundColor: "white"}}>
                <div className="card-body">
                    <h6 className="card-title slogan">Welcome home</h6>
                    <h6 className="card-subtitle mb-2 text-muted slogan">to the best Real Estate web application</h6>
                    <p className="card-text slogan">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


                </div>
            </div>

        </motion.div>
    )

}