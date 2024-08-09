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
    <div className="flex flex-col lg:w-[800px] mx-auto p-4">
      <div className="mx-4 justify-center">
        <div className="flex flex-col items-center">
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
              href="https://huggingface.co/collections/lytang/minicheck-and-llm-aggrefact-661c5d387082ad0b433dec65"
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
        </div>
        <div className="mb-2">
          <p className="leading-normal">
            <span className="font-bold">LLM-AggreFact</span> is a fact-checking
            benchmark that aggregates <b>11</b> of the most up-to-date publicly
            available datasets on grounded factuality (i.e., hallucination)
            evaluation.
          </p>

          <p className="leading-normal">
            <br></br>Please see our <a
              href="/blog"
              className="custom-link"
            >
              blog post
            </a> for a more detailed description.
          </p>
        </div>
        <div className="rounded-lg">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="key-features">
              <AccordionTrigger>
                <h2>Benchmark Details</h2>
              </AccordionTrigger>
              <AccordionContent>

                <p className="leading-normal">
                  <span className="aggrefact">LLM-AggreFact</span> is a
                    sentence-level evaluation benchmark. It contains examples of
                    human annotated <u>(document, claim, label)</u> tuples. A
                    fact-checking model is expected to predict whether the
                    sentence (which we call a claim) is supported/unsupported
                    (binary) by the document.
                </p>

                <p className="leading-normal">
                    <br></br>The benchmark covers both closed-book generation where the
                    facts are checked post-hoc as well as document-grounded
                    generation (RAG, summarization). Documents come from diverse
                    sources, including Wikipedia paragraphs, interviews, and web
                    text, covering domains such as news, dialogue, science, and
                    healthcare. The claims to be verified are mostly generated
                    from recent generative models.
                </p>

                <p className="leading-normal">
                    <br></br>We evaluate the performance of fact-checking models using
                    balanced accuracy, which takes label imbalance into account.
                    Balanced accuracy ranges from 0 to 1, the higher the better,
                    and a majority class baseline obtains a score of 50%.
                </p>

              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Leaderboard scoresData={scoresData}></Leaderboard>
      <div className="rounded-lg">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="author" className="flex-shrink">
            <AccordionTrigger>
              <h2>Team</h2>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-4 auto-rows-auto gap-x-4 gap-y-8">
                <div className="flex flex-col items-center">
                  <Image
                    src="/assets/Liyan.png"
                    alt="Liyan Tang"
                    width={128}
                    height={128}
                    quality={100}
                    className="w-32 h-32 rounded-full mb-2"
                  />
                  <Link
                    href="https://www.tangliyan.com"
                    target="_blank"
                    className="mb-1 custom-link"
                  >
                    Liyan Tang
                  </Link>
                  <p className="text-muted-foreground text-center">
                    UT Austin, Bespoke Labs
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src="/assets/phil20.jpeg"
                    alt="Philippe Leban"
                    width={128}
                    height={128}
                    quality={100}
                    className="w-32 h-32 rounded-full mb-2"
                  />
                  <Link
                    href="https://tingofurro.github.io"
                    target="_blank"
                    className="mb-1 custom-link"
                  >
                    Philippe Leban
                  </Link>
                  <p className="text-muted-foreground text-center">
                    Salesforce AI Research
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src="/assets/greg.png"
                    alt="Greg Durrett"
                    width={128}
                    height={128}
                    quality={100}
                    className="w-32 h-32 rounded-full mb-2"
                  />
                  <Link
                    href="https://www.cs.utexas.edu/~gdurrett"
                    target="_blank"
                    className="mb-1 custom-link"
                  >
                    Greg Durrett
                  </Link>
                  <p className="text-muted-foreground text-center">
                    UT Austin, Bespoke Labs
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src="/assets/trung.JPG"
                    alt="Trung Vu"
                    width={128}
                    height={128}
                    quality={100}
                    className="w-32 h-32 rounded-full mb-2"
                  />
                  <Link
                    href="https://x.com/trungthvu"
                    target="_blank"
                    className="mb-1 custom-link"
                  >
                    Trung Vu
                  </Link>
                  <p className="text-muted-foreground text-center">
                    Bespoke Labs
                  </p>
                </div>
              </div>
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
