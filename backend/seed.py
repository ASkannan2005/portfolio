from database import SessionLocal, engine, Base
import models

def seed():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    
    # Clear existing
    db.query(models.Profile).delete()
    db.query(models.Skill).delete()
    db.query(models.Project).delete()
    db.query(models.Experience).delete()

    # Seed Profile
    profile = models.Profile(
        name="Kannan A S",
        email="ask537097@gmail.com",
        phone="6382566107",
        github="https://github.com/ASkannan2005",
        linkedin="https://www.linkedin.com/in/kannan-a-s-0925ba296/",
        summary="Aspiring data analyst proficient in Power BI, Python, SQL, and ML. Focused on creating smart dashboards and meaningful visualizations, currently working on climate data analysis projects."
    )
    db.add(profile)

    # Seed Skills
    skills = [
        models.Skill(category="Data & Analytics", name="Data Analysis"),
        models.Skill(category="Data & Analytics", name="Data Visualization"),
        models.Skill(category="Data & Analytics", name="Power BI"),
        models.Skill(category="Data & Analytics", name="SQL"),
        models.Skill(category="Cloud & ML", name="Cloud Computing"),
        models.Skill(category="Cloud & ML", name="Machine Learning"),
        models.Skill(category="Cloud & ML", name="Python"),
        models.Skill(category="Cloud & ML", name="SQL"),
        models.Skill(category="UI/UX", name="Figma"),
        models.Skill(category="UI/UX", name="Canva"),
        models.Skill(category="UI/UX", name="Responsive Web Design"),
        models.Skill(category="UI/UX", name="React / CSS / JS")
    ]
    for skill in skills: db.add(skill)

    # Seed Projects
    projects = [
        models.Project(
            title="CLIMATE CHANGE WITH AI",
            description="An advanced machine learning project that predicts climate change impacts and tracks industrial pollution. Features real-time air quality monitoring, industrial emission tracking, and a comprehensive climate dashboard with AI-driven insights for environmental sustainability.",
            tags="Machine Learning,Python,AI,Climate Tech,Data Visualization,Analytics",
            image="climate_ai_1.png,climate_ai_2.png,climate_ai_3.png"
        ),
        models.Project(
            title="Netflix Content Analytics",
            description="Comprehensive analysis of Netflix shows and movies. Visualized global content distribution, rating patterns, and viewer trends using Power BI.",
            tags="Power BI,Analytics,Entertainment",
            image="netflix.png"
        ),
        models.Project(
            title="Retail Sales Performance",
            description="Dynamic sales tracking dashboard for a multi-city retail chain. Monitors units sold, average spend, and customer demographics in real-time.",
            tags="Power BI,Sales,Business Intelligence",
            image="retail.png"
        ),
        models.Project(
            title="AI-ML Virtual Internship (Google for Developers)",
            description="Successfully completed a 10-week AI-ML Virtual Internship supported by Google for Developers and AICTE. Gained hands-on experience in Artificial Intelligence and Machine Learning concepts.",
            tags="AI-ML,Machine Learning,Google,AICTE",
            image="internship.jpg"
        ),
        models.Project(
            title="Web Development Internship (Merida Tech Minds)",
            description="Completed a professional internship training in Web Development at Merida Tech Minds (OPC) Pvt. Ltd. Gained practical experience in building responsive web applications and modern frontend technologies.",
            tags="Web Development,React,JavaScript,Frontend",
            image="merida_web_dev.jpg"
        ),
        models.Project(
            title="Trendify Toys Shop",
            description="A full-stack MERN (MongoDB, Express, React, Node.js) e-commerce application for a toy store. Features include product browsing, shopping cart, and a sleek user interface.",
            tags="MERN Stack,MongoDB,Express,React,Node.js,E-commerce",
            image="trendify.png"
        ),
        models.Project(
            title="Loan Prediction and Analysis",
            description="A Python full-stack application for business funding analysis and loan eligibility prediction. Features AI-powered recommendations, risk factor assessment, and bank eligibility analysis.",
            tags="Python,Full Stack,Data Analysis,AI,Machine Learning",
            image="loan_prediction_1.png,loan_prediction_2.png"
        )
    ]
    for project in projects: db.add(project)


    # Seed Experience
    exps = [
        models.Experience(
            title="Data Analytics Practitioner",
            company="Climate Solutions Initiative",
            duration="2025 - Present",
            description="Developing end-to-end analytics pipelines for climate change monitoring. Built interactive Power BI dashboards that visualize emission patterns and predictive air quality models using Python and SQL."
        ),
        models.Experience(
            title="Web Development Intern",
            company="Merida Tech Minds (OPC) Pvt. Ltd",
            duration="Dec 2025 - Jan 2026",
            description="Successfully completed intensive training in Web Development. Gained practical knowledge in building modern, responsive user interfaces and backend integration."
        ),
        models.Experience(
            title="NCC Air Wing Cadet",
            company="National Cadet Corps",
            duration="Extra",
            description="Trained in basic aviation, drills, leadership, and teamwork. Cultivated discipline and strong collaborative skills."
        )
    ]
    for exp in exps: db.add(exp)

    db.commit()
    db.close()

if __name__ == "__main__":
    seed()
