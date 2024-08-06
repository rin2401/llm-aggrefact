export default function Blog() {
  return (
    <div className="lg:w-[800px] mx-auto p-4 mb-8 space-y-8">
      <div className="mb-8">
        <figure>
          <img src="/assets/robot-figure.png" className="w-full h-auto" />
        </figure>
      </div>

      <div>
        <h1 className="font-bold text-3xl tracking-tight pr-2">
          Introducing the LLM-AggreFact Benchmark ✅
        </h1>
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
            , tests this capability.{" "}
            <strong>
              This leaderboard tracks how well LLMs can fact-check LLM-generated
              content.
            </strong>
          </p>
          <br />
          <p>
            <span className="font-bold">✨NEW✨</span> results including
            Llama-3.1, Mistral 2, and a new model from{" "}
            <a
              href="http://www.bespokelabs.ai"
              target="_blank"
              className="custom-link"
            >
              Bespoke Labs
            </a>{" "}
            (fine-tuned on a new version of the data from our MiniCheck paper
            generated with Llama-3.1).
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
            of the Bespoke model with real-time inference.
          </p>
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="font-bold text-2xl tracking-tight">
          What LLM-AggreFact performance means
        </h2>
        <div className="space-y-6">
          <p className="leading-normal">
            &quot;Hallucination&quot; is used to refer to many types of errors
            in LLM responses. One key type of error is when a model fails to
            accurately reflect information given in its context (aka grounding
            documents). The MiniCheck paper calls this fact-checking on
            grounding documents. That is, given a statement, is it supported by
            a collection of grounding documents?
          </p>

          <div className="my-8 flex justify-center">
            <figure className="w-2/3 max-w-md">
              <img src="/assets/types.png" className="w-full h-auto" />
            </figure>
          </div>

          <p className="leading-normal">
            This is a very fundamental capability across a number of tasks,
            including retrieval-augmented generation (RAG) and related problems
            like summarization and document-grounded question answering.
            LLM-AggreFact draws together performance across 11 datasets, all
            with the format: (&quot;<i>D</i>&quot;, <i>c</i>, <i>y</i>), where
            &quot;<i>D</i>&quot; is a grounding document set, <i>c</i> is a
            claim, and <i>y</i> is a boolean label to indicate whether <i>c</i>{" "}
            is supported by &quot;<i>D</i>&quot;.
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
                  Wice
                </a>
                ): Wikipedia claims with citations.
              </li>
            </ul>
          </div>
          <p className="leading-normal">
            We have added{" "}
            <a
              href="https://arxiv.org/abs/2401.00396"
              target="_blank"
              className="custom-link"
            >
              RAGTruth
            </a>{" "}
            to the benchmark since the release of the original paper. All of
            these datasets are labeled for factuality by expert annotators. We
            believe this is an up-to-date collection of high-quality labeled
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
            Among LLMs, more recent and larger-scale models typically perform
            better. Notably, Mistral 2 outperforms the latest GPT-4 variants and
            Llama-3.1-70B Instruct is also a strong off-the-shelf open model.
          </p>
          <p className="leading-normal">
            The MiniCheck models from the paper are state-of-the-art for their
            size. The best performance on the leaderboard comes from a 7B model{" "}
            <a
              href="https://huggingface.co/bespokelabs/Bespoke-Minicheck-7B"
              target="_blank"
              className="custom-link"
            >
              Bespoke-Minicheck-7B
            </a>{" "}
            that is a fine-tuned version of InternLM2.5. [GREG: not sure what we
            want to say here] This model was produced by Bespoke Labs. Compared
            to the MiniCheck models in the paper, this version was produced with
            data generated by Llama-3.1-405B. Bespoke-Minicheck-7B is the
            strongest open fact-checking model available for commercial use.
          </p>
          <p className="leading-normal">
            This model is available as a demo{" "}
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
          <p className="leading-normal">
            <b>Caveats:</b> Systems on this leaderboard are benchmarked in a
            zero-shot fashion. As this is a binary classification task, it is
            possible to tune the threshold for each dataset. We believe this
            should be explored in practice. The MiniCheck paper shows that
            slightly stronger results can be achieved by doing this, but
            frontier LLMs do not benefit much.
          </p>
          <p className="leading-normal">
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

      <div className="italic space-y-6">
        Post by Greg Durrett, XYZ, XYZ. This leaderboard is maintained by Liyan
        Tang in collaboration with Bespoke Labs. Liyan Tang and Greg Durrett are
        both affiliated with UT Austin and Bespoke Labs.
      </div>
    </div>
  );
}
