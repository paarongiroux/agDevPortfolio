import ReactMarkdown from 'react-markdown';
import ImageWithCaption from './ImageWithCaption';

function Binchutle() {
    const chatPrompt = `
\`\`\`python
{"role": "system", "content": (
    "You're an assistant that generates only short, vivid prompts for an image generator. "
    "The prompt should be funny, weird, and surprising. Most importantly, it should be simple"
    "Keep it under 20 words. Do not add explanations or commentary. Just the prompt."
    "If the user asks for a caption, provide one for the last image description"
)}
\`\`\``;
    return (
        <body>
            <div className="pageContainer">
                <div className="pageTitle">
                    ** Binchutle **
                    <br></br>
                </div>

                <div className='com64box'>
                    <div className='com64boxtitle'>
                        BinchutleBot
                    </div>
                    <div className='com64inner'>
                         <div className='com64bullet'>
                            <span className="bulletPoint">*</span> <a href="https://www.instagram.com/binchutle/" target="_blank"> instagram.com/binchutle</a>
                         </div>

                         <div className='com64bullet'>
                            <p>
                                <span className="bulletPoint">* </span>
                                Binchutle is an AI instagram bot that uses{" "}
                                <a href="https://huggingface.co/TinyLlama/TinyLlama-1.1B-Chat-v1.0" target="_blank"> TinyLlama-1.1B-Chat-v1.0</a>{" "}
                                to generate an image prompt and caption, and pumps that image prompt into {" "}
                                <a href="https://huggingface.co/CompVis/stable-diffusion-v1-4" target="_blank"> stable-diffusion-v1-4</a>{" "}
                                to create an image.
                                Running these models locally has been a good way for a cheapskate to save a buck on API fees, 
                                and to get some practice working with AI under my belt.
                            </p>
                         </div>

                         <div className='com64bullet'>
                            <p>
                                <span className="bulletPoint">* </span>
                                The program downloads both of the models from huggingface and instantiates them with pytorch. 
                                On the LLM side of things, I've used the following chat prompt to get it to spit out 
                                the type of image prompts that I want: 
                                <div>
                                    <ReactMarkdown>{chatPrompt}</ReactMarkdown>
                                </div>
                            </p>
                         </div>

                         <div className='com64bullet'>
                            <p>
                                <span className="bulletPoint">* </span>
                                 Initially it was having a hard time following the instructions,
                                so I reinforced it with some of its own outputs that I liked and that 
                                seems to be doing the trick.
                            </p>
                         </div>

                         <div className='com64bullet'>
                            <p>
                                <span className="bulletPoint">* </span>
                                With this bot, I’m going for more of a funny curation of images as opposed to a realistic instagram account. 
                                Using TinyLlama not only runs much faster on my computer than a larger model, but leaves 
                                in some funny quirks and patterns in the generated images. If you take a look at the 
                                instagram account, you’ll see that the model has an affinity for clouds and rainbows.
                                <br/>
                                <ImageWithCaption
                                    src="https://binchutlebot.s3.us-east-2.amazonaws.com/output-20250522-082647.png"
                                    alt="Unicorn skateboarding through the clouds."
                                    caption='Prompt: "A skateboarding unicorn crashes through the clouds, leaving a trail of rainbow confetti in its wake."'
                                    width="512px"
                                    centered
                                />
                                <br/>
                                <ImageWithCaption
                                    src="https://binchutlebot.s3.us-east-2.amazonaws.com/output-20250522-083652.png"
                                    alt="Wings of a rainbow cat soar through the clouds."
                                    caption='Prompt: "A cat with wings soars through the sky, leaving a trail of rainbow kites in its wake."'
                                    width="512px"
                                    centered
                                />
                            </p>
                         </div>
                         <div className='com64bullet'>
                            <p>
                                <span className="bulletPoint">* </span>
                                To actually generate the images, I am using {" "}
                                <a href="https://huggingface.co/CompVis/stable-diffusion-v1-4" target="_blank"> stable-diffusion-v1-4</a>. 
                                Like I said, I am shooting for funny over realism with these, so I’ve set the number of inference steps to 10. 
                                This produces more surreal looking images and, of course, runs quicker on my computer.
                                <br/>
                                <ImageWithCaption
                                    src="https://binchutlebot.s3.us-east-2.amazonaws.com/output-20250522-082309.png"
                                    alt="Man with carrot generated image with 10 inference steps"
                                    caption='Prompt: "A man with a pet beetle tries to catch a fish with a fishhook made from a carrot, but it keeps slipping out. (10 inference steps)"'
                                    width="512px"
                                    centered
                                />
                                <br/>
                                <ImageWithCaption
                                    src="https://binchutlebot.s3.us-east-2.amazonaws.com/output-20250527-093437.png"
                                    alt="Man with carrot generated image with 50 inference steps"
                                    caption='Same prompt as above but with num_inference_steps set to 50'
                                    width="512px"
                                    centered
                                />
                            </p>
                        </div>
                        <div className='com64bullet'>
                            <p>
                                <span className="bulletPoint">* </span>
                                That covers the actual image generation, now all that's left is to post it to instagram. 
                                I tried getting access to Meta’s GraphAPI to make instagram posts, but that ended up being 
                                easier said than done. Meta requires your instagram account to be linked to a 
                                facebook business account. I tried to set up one of these business accounts which somehow 
                                resulted in getting banned from facebook. So, in order to avoid  jumping through these hoops and ladders, 
                                I ended up using selenium to post these using chromedriver instead.

                            </p>
                        </div>

                        <div className='com64bullet'>
                            <p>
                                <span className="bulletPoint">* </span>
                                I’ve also added some code to upload the images to an S3 bucket and am keeping a csv 
                                file with the prompts, captions and S3 URLs in case the instagram account ends up 
                                getting banned as well.
                            </p>
                        </div>

                        <div className='com64bullet'>
                            <p>
                                <span className="bulletPoint">* </span>
                                I’ve also added some code to upload the images to an S3 bucket and am keeping a csv 
                                file with the prompts, captions and S3 URLs in case the instagram account ends up 
                                getting banned as well.
                            </p>
                        </div>

                        <div className='com64bullet'>
                            <p>
                                <span className="bulletPoint">* </span>
                                Check out the instagram account here: {" "}<a href="https://www.instagram.com/binchutle/" target="_blank"> instagram.com/binchutle</a>
                            </p>

                            <p>
                                <span className="bulletPoint">* </span>
                                Or the github project here: {" "}<a href="https://github.com/paarongiroux/binchutleBot" target="_blank"> github.com/paarongiroux/binchutleBot</a>
                            </p>
                        </div>

                         <div className='com64bullet'>
                            <p>
                                <span className="bulletPoint">* </span>
                                Bonus: here is a gif I made by having the stable diffusion model spit out all of its intermediate images. 
                                I particularly like how some of the features of the image take their shape from the initial noise. 
                                (watch the rocks on the ground or the features on the spacesuits)
                                <ImageWithCaption
                                    src="/stable_diffusion_example.gif"
                                    alt="Intermediate steps of stable diffusion with 10 inference steps."
                                    caption='Intermediate steps of stable diffusion with 10 inference steps.'
                                    width="512px"
                                    centered
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}
export default Binchutle;