import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
/* import { SocialList } from "../../components/SocialList"; */

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/contact"} />
      <OpenGraphMeta url={"/contact"} />
      <TwitterCardMeta url={"/contact"} />
      <div className="container">
      <div className="formContainer">
      <h2 className="headerStyle" >Get in touch!</h2>
      <form className="formStyle" method="POST" netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <label className="labelStyle" >
          <span>Name</span>
          <input className="inputStyle" type="text" name="name" id="name" placeholder='name'/>
        </label>
        <label className="labelStyle" >
          <span>Email</span>
          <input className="inputStyle" type="email" name="email" id="email" placeholder='email'/>
        </label>
        <input type="hidden" name="bot-field" />
        <label className="labelStyle"><span>Leave a message</span></label>
        <textarea className="textAreaStyle" name="message" cols={30} rows={10} />
        <button className="submitButton" type="submit">Submit</button>
      </form>
    </div>

      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
        .formContainer {
            border: 1px solid #6a6e6b;
            padding: 10px 30px;
            border-radius: 10px;
            max-width: 300px;
            display: grid;
            margin: auto;
            justify-content: center;
            background-color: #b0bdbf;
            border: none;
            box-shadow: 2px 3px 8px rgba(105, 122, 144, 0.6);
            margin-top: 30px;
          }
          
          .headerStyle {
            text-align: center;
            color: #222;;
          }
          
          .formStyle {
            display: grid;
            justify-content: center;
          }
          
          .labelStyle {
            width: 238px;
            margin-top: 0.3rem;
            color: #222;;
            font-weight: bold;
          }
          
          .labelStyle span {
            margin-left: 5px;
          }
          
          .inputStyle {
            width: 100%;
            margin-right: 0.2rem;
            padding: 5px 10px;
            border-radius: 4px;
            border: none;
          }
          
          input.inputStyle:focus {
            background-color: #c7f3f7;
          }
          
          .textAreaStyle {
            border: none;
            border-radius: 4px;
          }
          
          .submitButton {
            background-color: #32d5eb;
            border-radius: 4px;
            padding: 10px 20px;
            border: none;
            margin-top: 20px;
            width: 100%;
            color: #fff;
            font-weight: bold;
            font-size: 1.2rem;
          }
          
          .submitButton:hover {
            background-color: #1bbcd1;
          }
      `}</style>
    </Layout>
  );
}