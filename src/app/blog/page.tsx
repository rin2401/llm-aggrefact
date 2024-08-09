export default function Blog() {
  return (
    <div className="lg:w-[800px] mx-auto p-4 mb-8 space-y-8">

      <div>
        <h1 className="font-bold text-3xl tracking-tight pr-2">
        A  Leaderboard for Grounded Factuality ✅
        </h1>
      </div>

      <div className="mb-8">
        <figure>
          <img src="/assets/robot-figure.png" className="w-full h-auto" />
        </figure>
      </div>

      <div>
        <div className="italic text-accented-foreground">
          <br />
          <p>
            Can an LLM be used to fact-check the output of another LLM? The
            LLM-AggreFact dataset, introduced in our paper{" "}
            <a
              href="https://arxiv.org/pdf/2404.10774"
              target="_blank"
              className="custom-link"
            >
              MiniCheck
            </a>
            , tests LLMs&apos; ability to assess <em>grounded factuality</em>, or 
            whether statements are supported by evidence documents.{" "}
            <strong>
              We are now releasing the leaderboard, with a new dataset since the release of the original paper, to track how well LLMs can fact-check LLM-generated content.
            </strong>
          </p>
          <br />
          <p>
            <span className="font-bold">✨NEW✨</span> results including
            Llama-3.1, Mistral 2, Claude-3.5 Sonnet, and a new SOTA model <a href="https://huggingface.co/bespokelabs/Bespoke-Minicheck-7B" target="_blank" className="custom-link">Bespoke-Minicheck-7B</a>{" "} from{" "}
            <a
              href="http://www.bespokelabs.ai"
              target="_blank"
              className="custom-link"
            >
              Bespoke Labs.
            </a>{" "}
          </p>
          <p>
            <span className="font-bold">✨NEW✨</span>{" "}
            <a
              href="http://playground.bespokelabs.ai"
              target="_blank"
              className="custom-link"
            >
              Demo
            </a>{" "}
            of Bespoke-Minicheck-7B with real-time inference.
          </p>
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="font-bold text-2xl tracking-tight">
        Grounded Factuality: What LLM-AggreFact performance means
        </h2>
        <div className="space-y-6">
          <p className="leading-normal">
            &quot;Hallucination&quot; is used to refer to many types of errors
            in LLM responses. Here we are interested in grounded factuality: Assuming 
            that we are given a context paragraph and a statement, we want to check if 
            that statement is logically supported by the context (aka grounding documents). 
            One key type of error is when a model fails to accurately reflect information 
            given in its context and produces an answer with hallucinations. The MiniCheck 
            paper calls this <em>fact-checking on grounding documents</em>.
          </p>

          <div className="my-8 flex justify-center">
            <figure className="w-2/3 max-w-md">
              <img src="/assets/types.png" className="w-full h-auto" />
              <figcaption className="text-center text-sm mt-2 text-gray-600">
                Source: from MiniCheck paper.
              </figcaption>
            </figure>
          </div>

          <p className="leading-normal">
            This is a very fundamental capability that is needed for retrieval-augmented 
            generation (RAG) and related problems like summarization and 
            document-grounded question answering.
          </p>

          <p className="leading-normal">
            LLM-AggreFact draws together performance across 11 datasets, all
            with the format: (<i>{"{"}</i><i>D</i><i>{"}"}</i>, <i>c</i>, <i>y</i>), 
            where <i>{"{"}</i><i>D</i><i>{"}"}</i> is a grounding document set, <i>c</i> is a
            claim, and <i>y</i> is a boolean label to indicate whether <i>c</i>{" "}
            is supported by <i>{"{"}</i><i>D</i><i>{"}"}</i>.
          </p>


          <p className="leading-normal">
            There are two general approaches to this task. First, LLMs can be
            prompted zero-shot with the document(s) and the claim, and asked if
            the claim is supported by the document(s). Second, models designed
            for related subtasks like textual entailment or question answering
            (or multitasked models, like{" "}
            <a
              href="https://aclanthology.org/2023.acl-long.634.pdf"
              target="_blank"
              className="custom-link"
            >
              AlignScore
            </a>
            ) can be used to produce classification decisions. MiniCheck belongs
            to the second approach.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="font-bold text-2xl tracking-tight">
            Datasets included in LLM-AggreFact Benchmark
          </h2>
          <div className="leading-normal">
            The datasets included are drawn from: <br />
            <ul className="list-disc pl-4">
              <li>
                Summarization datasets (
                <a
                  href="https://aclanthology.org/2023.acl-long.650.pdf"
                  target="_blank"
                  className="custom-link"
                >
                  AggreFact-CNN/XSum
                </a>
                ,{" "}
                <a
                  href="https://aclanthology.org/2024.naacl-long.251.pdf"
                  target="_blank"
                  className="custom-link"
                >
                  TofuEval-MeetB/MediaS
                </a>
                ,{" "}
                <a
                  href="https://arxiv.org/abs/2401.00396"
                  target="_blank"
                  className="custom-link"
                >
                  RAGTruth
                </a>
                ): datasets of models trained or prompted for summarizing
                documents, meeting transcripts, etc.
              </li>
              <li>
                Retrieval-augmented generation datasets (
                <a
                  href="https://aclanthology.org/2023.findings-emnlp.467.pdf"
                  target="_blank"
                  className="custom-link"
                >
                  ClaimVerify
                </a>
                ,{" "}
                <a
                  href="https://arxiv.org/pdf/2310.12150"
                  target="_blank"
                  className="custom-link"
                >
                  LFQA
                </a>
                ,{" "}
                <a
                  href="https://aclanthology.org/2024.naacl-long.167.pdf"
                  target="_blank"
                  className="custom-link"
                >
                  ExpertQA
                </a>
                ,{" "}
                <a
                  href="https://arxiv.org/abs/2401.00396"
                  target="_blank"
                  className="custom-link"
                >
                  RAGTruth
                </a>
                ): datasets of models answering questions from retrieved
                documents.
              </li>
              <li>
                Post-hoc grounding (
                <a
                  href="https://aclanthology.org/2024.naacl-long.167.pdf"
                  target="_blank"
                  className="custom-link"
                >
                  ExpertQA
                </a>
                ,{" "}
                <a
                  href="https://arxiv.org/pdf/2402.00559"
                  target="_blank"
                  className="custom-link"
                >
                  REVEAL
                </a>
                ,{" "}
                <a
                  href="https://arxiv.org/pdf/2311.09000"
                  target="_blank"
                  className="custom-link"
                >
                  Factcheck-GPT
                </a>
                ): datasets where models&apos; answers are generated
                &quot;closed book&quot;, then verified against retrieved
                documents.
              </li>
              <li>
                Human-written claims (
                <a
                  href="https://aclanthology.org/2023.emnlp-main.470.pdf"
                  target="_blank"
                  className="custom-link"
                >
                  WiCE
                </a>
                ): Wikipedia claims with citations.
              </li>
            </ul>
            We have added{" "}
            <a
              href="https://arxiv.org/abs/2401.00396"
              target="_blank"
              className="custom-link"
            >
              RAGTruth
            </a>{" "}
            to the benchmark since the release of the original paper.
          </div>
          <p className="leading-normal">
            All of these datasets are labeled for factuality by expert annotators. This is an up-to-date collection of high-quality labeled
            datasets over strong LLM outputs. The MiniCheck paper further
            discusses the rationale for including or excluding different
            benchmarks.{" "}
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="font-bold text-2xl tracking-tight">
            Cost Considerations
          </h2>
          <p className="leading-normal">
            We think it&apos;s important for LLM fact-checkers to be small and
            cheap to run. A response from an LLM might consist of many
            sentences. To identify and localize errors, a fact-checker needs to
            be called many times. If we use GPT-4 as the fact-checker, we can
            easily spend {">"}10x more to verify the response than we did to
            produce it in the first place!
          </p>
          <p className="leading-normal">
            The leaderboard also includes model size as a key factor. For most
            models, this correlates with FLOPs and cost in a standard way.
            However, this is a stark divide between open-source models and
            closed-source models. Fact-checking the examples in the benchmark
            can cost as much as $100 when using GPT-4, but as little as $1 when
            using smaller models hosted on premise. We hope to provide guidance
            to practitioners about what models perform well across different
            scales.
          </p>
        </div>
        <p className="leading-normal">
          (More detail on cost is available in the MiniCheck paper.)
        </p>
        <div className="space-y-6">
          <h2 className="font-bold text-2xl tracking-tight">
            How do models do?
          </h2>
          <p className="leading-normal">
            <strong>Among LLMs, more recent and larger-scale models typically perform
            better.</strong> Notably, Mistral-Large 2 and Claude-3.5 Sonnet outperform the latest GPT-4 variants and
            Llama-3.1-70B Instruct is also a strong off-the-shelf open model.
          </p>
          <p className="leading-normal">
            <strong>Bespoke-Minicheck-7B:</strong> The best performance on 
            our leaderboard comes from a 7B model that was created using a 
            proprietary data curation process from Bespoke Labs. In contrast 
            to other MiniCheck models in the paper, <a
              href="https://huggingface.co/bespokelabs/Bespoke-Minicheck-7B"
              target="_blank"
              className="custom-link"
            >
              Bespoke-Minicheck-7B
            </a>{" "} was trained using synthetic data from Llama-3.1-405B which 
            is the strongest open model available for commercial use. Surprisingly, 
            it outperforms much bigger models demonstrating that the data curation 
            process is the key for small model performance.
          </p>
          <p className="leading-normal">
          Bespoke-Minicheck-7B is available as a demo{" "}
            <a
              href="http://playground.bespokelabs.ai/"
              target="_blank"
              className="custom-link"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-6">
          <h2 className="font-bold text-2xl tracking-tight">
            Conclusion and Future Work
          </h2>
          <p className="leading-normal">
            We are eager to see more progress in small, faster, and more
            performant models for this kind of fact-checking. We will be
            actively maintaining this leaderboard; if you wish to add your model
            to it, please get in touch with us.
          </p>
          <p className="leading-normal text-xs">
            <b>Caveats:</b> Systems on this leaderboard are benchmarked in 
            a zero-shot fashion. As this is a binary classification task, it 
            is possible to tune the threshold for each dataset. We believe 
            this should be explored in practice. The MiniCheck paper shows 
            that slightly stronger results can be achieved by doing this, 
            but frontier LLMs do not benefit much.
          </p>

          <p className="leading-normal text-xs">
            Furthermore, note that this task involves detecting hallucinations,
            but is not the only phenomenon referred to as such. A significant
            body of work is concerned with whether LLMs output the right answers
            about long-tail entities when prompted &quot;closed book&quot;,
            e.g.,{" "}
            <a
              href="https://aclanthology.org/2023.emnlp-main.741.pdf"
              target="_blank"
              className="custom-link"
            >
              FActScore
            </a>{" "}
            and the recent{" "}
            <a
              href="https://arxiv.org/pdf/2407.17468"
              target="_blank"
              className="custom-link"
            >
              WildHallucinations
            </a>
            . This is not our focus.
          </p>
        </div>
      </div>

    </div>
  );
}
