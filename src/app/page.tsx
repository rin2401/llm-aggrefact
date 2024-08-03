import { scoresData } from "@/app/data";
import Leaderboard from "@/components/Leaderboard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col xl:w-1/2 lg:w-3/4 mx-auto">
      <div className="mx-4">
        <h1 className="md:text-3xl text-2xl font-bold tracking-tight">
          LLM-AggreFact Leaderboard
        </h1>
        <div className="lg:mb-6 mb-2">
          {" "}
          <Link
            href="https://github.com/Liyan06/MiniCheck/"
            target="_blank"
            className="inline-flex items-center custom-link text-sm"
          >
            GitHub
            <FontAwesomeIcon
              className="mx-1"
              icon={faGithub}
              width="15"
              height="15"
            />
          </Link>
          ,{" "}
          <Link
            href="https://arxiv.org/pdf/2404.10774"
            target="_blank"
            className="inline-flex items-center custom-link text-sm"
          >
            arXiv
            <Image
              src="/arxiv-logomark-small.svg"
              className="mx-1"
              alt="arxiv"
              width="10"
              height="10"
            />
          </Link>
          ,{" "}
          <Link
            href="https://huggingface.co/datasets/lytang/LLM-AggreFact"
            target="_blank"
            className="inline-flex items-center custom-link text-sm"
          >
            HuggingFace
            <Image
              src="/hf.svg"
              className="mx-1"
              alt="hf"
              width="25"
              height="25"
            />
          </Link>
        </div>
        <div className="mb-2">
          <p className="leading-normal">
            <span className="font-bold">LLM-AggreFact</span> is a fact-checking
            benchmark that aggregates <b>11</b> of the most up-to-date publicly
            available datasets on factual consistency (i.e., hallucination)
            evaluation.
          </p>
        </div>
        <div className="rounded-lg px-2 p-1">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="key-feautres">
              <AccordionTrigger>
                <h2>Key Features</h2>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-decimal list-inside">
                  <li>
                    <span className="aggrefact">LLM-AggreFact</span> is a
                    sentence (or, claim) level evaluation benchmark. It contains
                    examples of human annotated <u>(document, claim, label)</u>{" "}
                    tuples. A fact-checking model is expected to predict whether
                    the claim is supported/unsupported (binary) by the document.
                  </li>
                  <li>
                    The benchmark covers both closed-book and grounded
                    generation settings with 30K/29K dev/test data.
                  </li>
                  <li>
                    Documents come from diverse sources, including Wikipedia
                    paragraphs, interviews, and web text, covering domains such
                    as news, dialogue, science, and healthcare.{" "}
                  </li>
                  <li>
                    Claims to be verified are mostly generated from recent
                    generative models (except for one dataset of human-written
                    claims), <u>without any human intervention in any format</u>
                    , such as injecting certain error types into model-generated
                    claims.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="eval-method">
              <AccordionTrigger>
                <h2>Evaluation Method</h2>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  We evaluate the performance of fact-checking models using
                  balanced accuracy, which takes label imbalance into account.
                  Balanced accuracy ranges from 0 to 1, the higher the better,
                  and majority class voting obtains a score of 50%.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Leaderboard scoresData={scoresData}></Leaderboard>
      <div className="rounded-lg px-2 p-1">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="prompt">
            <AccordionTrigger>
              <h2>Zero-shot Prompt for Evaluating LLM Fact-checking</h2>
            </AccordionTrigger>
            <AccordionContent>
              <pre className="text-sm text-gray-600 font-mono whitespace-pre-wrap">
                {`Determine whether the provided claim is consistent with the corresponding document. Consistency in this context implies that all information presented in the claim is substantiated by the document. If not, it should be considered inconsistent.
Document: [DOCUMENT]
Claim: [CLAIM]
Please assess the claim's consistency with the document by responding with either "yes" or "no". Answer:`}
              </pre>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="author">
            <AccordionTrigger>
              <h2>Team</h2>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-row items-center space-x-4">
                <div className="flex flex-col items-center">
                  <a
                    href="https://www.tangliyan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center"
                  >
                    <img
                      src="/assets/Liyan.png"
                      alt="Liyan Tang"
                      className="w-32 h-32 rounded-full mb-2"
                    />
                    <p>Liyan Tang</p>
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <a
                    href="https://tingofurro.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center"
                  >
                    <img
                      src="/assets/phil20.jpeg"
                      alt="Philippe Leban"
                      className="w-32 h-32 rounded-full mb-2"
                    />
                    <p>Philippe Leban</p>
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <a
                    href="https://www.cs.utexas.edu/~gdurrett/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center"
                  >
                    <img
                      src="/assets/greg.png"
                      alt="Greg Durrett"
                      className="w-32 h-32 rounded-full mb-2"
                    />
                    <p>Greg Durrett</p>
                  </a>
                </div>
              </div>{" "}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="citaiton">
            <AccordionTrigger>
              <h2>Citation</h2>
            </AccordionTrigger>
            <AccordionContent>
              <pre className="text-sm text-gray-600 font-mono whitespace-pre-wrap">
                {`@misc{tang2024minicheck,
      title={MiniCheck: Efficient Fact-Checking of LLMs on Grounding Documents}, 
      author={Liyan Tang and Philippe Laban and Greg Durrett},
      year={2024},
      eprint={2404.10774},
      archivePrefix={arXiv},
      primaryClass={cs.CL}
}`}
              </pre>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}