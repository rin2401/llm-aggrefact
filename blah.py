import json


def add_links_to_models(scores_data, links_dict):
    for model in scores_data:
        model_name = model['model']
        if model_name in links_dict:
            model['link'] = links_dict[model_name]
        else:
            model['link'] = ''
    return scores_data


# The links dictionary
links = {
    "Mixtral-8x22B": "https://huggingface.co/mistralai/Mixtral-8x22B-Instruct-v0.1",
    "Mistral-Large 2": "https://huggingface.co/mistralai/Mistral-Large-Instruct-2407",
    "Llama-3.1-8B-Instruct": "https://huggingface.co/meta-llama/Meta-Llama-3.1-8B-Instruct",
    "Llama-3-70B-Instruct": "https://huggingface.co/meta-llama/Meta-Llama-3-70B-Instruct",
    "Llama-3.1-70B-Instruct": "https://huggingface.co/meta-llama/Meta-Llama-3.1-70B-Instruct",
    "Llama-3.1-405B-Instruct": "https://huggingface.co/meta-llama/Meta-Llama-3.1-405B-Instruct",
    "InternLM2.5-7B-chat": "https://huggingface.co/internlm/internlm2_5-7b-chat",
    'Gemini-Pro': 'https://deepmind.google/technologies/gemini/pro/',
    'PaLM2-Bison': 'https://blog.google/technology/ai/google-palm-2-ai-large-language-model/',
    'Mistral-8x7B': 'https://mistral.ai/technology/#models',
    'GPT-3.5-Turbo': 'https://platform.openai.com/docs/models/gpt-3-5-turbo',
    'Claude-2.1': 'https://www.anthropic.com/news/claude-2-1',
    'Mistral-Large': 'https://mistral.ai/news/mistral-large/',
    'Claude-3 Opus': 'https://www.anthropic.com/news/claude-3-family',
    'GPT-4-Turbo-0125': 'https://platform.openai.com/docs/models/gpt-4-turbo-and-gpt-4',
    'GPT-4o-0513': 'https://platform.openai.com/docs/models/gpt-4o',
    'GPT-4o-mini-0718': 'https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/',
    'SummaC-CV': 'https://github.com/tingofurro/summac/',
    'T5-NLI-Mixed': 'https://huggingface.co/google/t5_xxl_true_nli_mixture',
    'DAE': 'https://github.com/tagoyal/factuality-datasets',
    'SummaC-ZS': 'https://github.com/tingofurro/summac/',
    'AlignScore': 'https://github.com/yuh-zha/AlignScore',
    'MiniCheck-DeBERTa-L': 'https://huggingface.co/lytang/MiniCheck-DeBERTa-v3-Large',
    'MiniCheck-RoBERTa-L': 'https://huggingface.co/lytang/MiniCheck-RoBERTa-Large',
    'MiniCheck-Flan-T5-L': 'https://huggingface.co/lytang/MiniCheck-Flan-T5-Large',
}

# Read the original data
with open('scores_data.json', 'r') as f:
    scores_data = json.load(f)

# Add links to the models
updated_scores_data = add_links_to_models(scores_data, links)

# Write the updated data back to a file
with open('updated_scores_data.json', 'w') as f:
    json.dump(updated_scores_data, f, indent=2)

