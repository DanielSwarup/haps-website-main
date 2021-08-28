<template>
  <div class="team-cont">
    <div class="section-header">
      The <span>Team</span>
    </div>
    <div class="members-list-cont">
      <ul>
        <li class="member">
          <div class="member-full-cont">
            <div class="member-info-cont">
              <div class="member-name">
                Prof. Atulya K. Nagar
              </div>
              <div class="member-excerpt">
                Prof. Atulya K. Nagar holds the Foundation Chair as Professor of Mathematical Sciences and is the Pro Vice-Chancellor (Research) at Liverpool Hope University, United Kingdom. He is responsible for developing Sciences and Engineering and has been the Head of the School of Mathematics, Computer Science and Engineering which he established at the University. He received a prestigious Commonwealth Fellowship for pursuing his doctorate (DPhil) in Applied Nonlinear Mathematics, which he earned from the University of York (UK) in 1996. He holds BSc (Hons), MSc, and MPhil (with distinction) in Mathematical Physics from the MDS University of Ajmer, India. Prior to joining Liverpool Hope, he was with the Department of Mathematical Sciences, and later at the Department of Systems Engineering, at Brunel University, London.
                <br><br>
                He is an internationally respected scholar working at the cutting edge of nonlinear mathematics, theoretical computer science, and systems engineering. He has edited volumes on Intelligent Systems, and Applied Mathematics. He is the Editor-in-Chief of the International Journal of Artificial Intelligence and Soft Computing (IJAISC) and serves on editorial boards for several prestigious journals. He is well published with over 450 publications in prestigious publishing outlets. He has an extensive background and experience of working in Universities in the UK and India. He has been an expert reviewer for the Biotechnology and Biological Sciences Research Council (BBSRC) grants peer-review committees for Bioinformatics Panel; Engineering and Physical Sciences Research Council (EPSRC) for High Performance Computing Panel; and served on the Peer-Review College of the Arts and Humanities Research Council (AHRC) as a scientific expert member. Prof Nagar sits on the JISC Research Strategy group and he is a fellow of the Institute of Mathematics and Its applications (FIMA) and a fellow of the Higher Education Academy (FHEA).
              </div>
            </div>
            <div class="member-right-cont">
              <div class="member-picture">
                <img src="~/assets/Atulya-Nagar.jpg">
                <div class="member-contact">
                  Phone: <a href="tel:1512913000">+44 (0)151 291 3000</a> <br>
                  Email: <a href="mailto:haps@hope.ac.uk">haps@hope.ac.uk</a><br><br>
                  <a href="https://orcid.org/0000-0001-5549-6435">ORCID</a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="member">
          <div class="member-full-cont">
            <div class="member-info-cont">
              <div class="member-name">
                Dr. Philip B. Charlesworth
              </div>
              <div class="member-excerpt">
                Dr. Philip B. Charlesworth is a Chartered Engineer with 38 years experience in communications systems engineering. This includes 16 years as an engineering officer in the Royal Air Force in both command and staff appointments. For 20 years he worked in the defence industry as a solutions architect for large and complex communications networks. In September 2010 he transferred to the research division of EADS, Innovation Works. His research activity centred on the development of concepts and technologies for UAV communications, including solar-powered UAVs
                <br><br>
                He is currently supporting STEM activities in schools, and supervising university research as a Visiting Professor at Liverpool Hope University.
              </div>
            </div>
            <div class="member-right-cont">
              <div class="member-picture">
                <img src="~/assets/Philip.jpg">
                <div class="member-contact">
                  Phone: <a href="tel:1512913000">+44 (0)151 291 3000</a> <br>
                  Email: <a href="mailto:haps@hope.ac.uk">haps@hope.ac.uk</a><br>
                  <a href="https://orcid.org/0000-0001-5549-6435">ORCID</a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team'
}
</script>

<style scoped>
  .team-cont{
  }
  .section-header{
    margin-top: 50px;
    margin-left: clamp( 1px, 20vw, 250px);
    float: left;
    text-align: left;
    overflow: visible;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 80px var(--primary-font-family-proxima-nova);
    font-size: clamp(3rem, 6vw, 5rem);
    letter-spacing: var(--primary-character-spacing-0);
    color: var(--HAPS-grey);
    opacity: 1;
  }
  .section-header span {
    background: linear-gradient(to top, #9ACBEC 50%, transparent 50%);
  }
  .members-list-cont{
    width: 100%;
  }
  .member{
    margin-top: 40px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    min-height: 400px;
    padding-bottom: 40px;
    background: var(--HAPS-light-grey) 0% 0% no-repeat padding-box;
  }
  .member-full-cont{
    margin-left: clamp( 1px, 5vw, 150px);
  }
  .member-info-cont{
    float: left;
    margin-top: 20px;
    margin-right: clamp(40px, 7vw, 150px);
  }
  .member-name{
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 35px var(--primary-font-family-proxima-nova);
    font-size: clamp(1.5rem, 6vw, 2rem);
    letter-spacing: var(--primary-character-spacing-0);
    color: var(--HAPS-dark-grey);
    text-align: left;
  }
  .member-excerpt{
    margin-top: 10px;
    width: clamp(200px, 70vw, 900px);
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 19px var(--primary-font-family-proxima-nova);
    font-size: clamp(0.8rem, 3vw, 1.1rem);
    letter-spacing: var(--primary-character-spacing-0-3);
    color: var(--HAPS-dark-grey);
    text-align: left;
  }
  .member-right-cont{
    margin-top: clamp( 1px, 5vw, 50px);
    float: left;
  }
  .member-picture{
    margin-right: 10px;
  }
  .member-picture img{
    width: clamp(200px, 15vw, 300px);
    height: auto;
  }
  .member-contact{
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 19px var(--primary-font-family-proxima-nova);
    font-size: clamp(0.9rem, 3vw, 1.1rem);
    letter-spacing: var(--primary-character-spacing-0);
    color: var(--HAPS-dark-grey);
    text-align: left;
    margin-top: 15px;
  }
  .member-contact a{
    color: var(--HAPS-blue);
  }
</style>
