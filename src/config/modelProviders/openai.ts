import { ModelProviderCard } from '@/types/llm';

// refs to: https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo
const OpenAI: ModelProviderCard = {
  chatModels: [
    {
      description: 'GPT 3.5 Turbo，适用于各种文本生成和理解任务',
      displayName: 'GPT-3.5 Turbo',
      id: 'gpt-3.5-turbo',
      tokens: 16_385,
    },
    {
      displayName: 'Coze-3.5-Net',
      hidden: true,
      id: 'gpt-3.5-coze',
      tokens: 8192,
      vision: true,
    },
    {
      displayName: 'Bing-3.5-Net',
      hidden: true,
      id: 'gpt-3.5-bing',
      tokens: 8192,
    },
    {
      displayName: 'GPT-4',
      hidden: true,
      id: 'gpt-4',
      tokens: 32_768,
    },
    {
      displayName: 'GPT-3.5 Turbo (0125)',
      functionCall: true,
      hidden: true,
      id: 'gpt-3.5-turbo-0125',
      tokens: 16_385,
    },
    {
      displayName: 'GPT-3.5 Turbo (1106)',
      functionCall: true,
      hidden: true,
      id: 'gpt-3.5-turbo-1106',
      tokens: 16_385,
    },
    {
      displayName: 'GPT-3.5 Turbo Instruct',
      hidden: true,
      id: 'gpt-3.5-turbo-instruct',
      tokens: 4096,
    },
    {
      displayName: 'GPT-3.5 Turbo 16K',
      hidden: true,
      id: 'gpt-3.5-turbo-16k',
      tokens: 16_385,
    },
    {
      displayName: 'GPT-3.5 Turbo (0613)',
      hidden: true,
      id: 'gpt-3.5-turbo-0613',
      legacy: true,
      tokens: 4096,
    },
    {
      displayName: 'GPT-3.5 Turbo 16K (0613)',
      hidden: true,
      id: 'gpt-3.5-turbo-16k-0613',
      legacy: true,
      tokens: 4096,
    },
    {
      displayName: 'GPT-4 Turbo Preview',
      functionCall: true,
      id: 'gpt-4-turbo-preview',
      tokens: 128_000,
    },
    {
      displayName: 'GPT-4 Turbo Preview (0125)',
      functionCall: true,
      hidden: true,
      id: 'gpt-4-0125-preview',
      tokens: 128_000,
    },
    {
      displayName: 'GPT-4 Turbo Preview (1106)',
      hidden: true,
      id: 'gpt-4-1106-preview',
      tokens: 128_000,
    },
    {
      displayName: 'Coze-4 Net',
      hidden: true,
      id: 'gpt-4-coze',
      tokens: 8192,
      vision: true,
    },

    {
      displayName: 'Bing-4 Net',
      hidden: true,
      id: 'gpt-4-turbo-bing',
      tokens: 16_385,
    },
    {
      displayName: 'Bing-4 32k',
      hidden: true,
      id: 'gpt-4-32k-bing',
      tokens: 32_768,
    },
    {
      displayName: 'GPT-4 All',
      files: true,
      hidden: true,
      id: 'gpt-4-all',
      tokens: 128_000,
      vision: true,
    },
    {
      displayName: 'GPT-4 Mobile',
      hidden: true,
      id: 'gpt-4-mobile',
      tokens: 128_000,
    },
    {
      description: 'GPT-4 视觉预览版，支持视觉任务',
      displayName: 'GPT-4 Vision Preview',
      id: 'gpt-4-vision-preview',
      tokens: 128_000,
      vision: true,
    },
    {
      hidden: true,
      id: 'gpt-4-0613',
      tokens: 8192,
    },
    {
      hidden: true,
      id: 'gpt-4-32k',
      tokens: 32_768,
    },
    {
      hidden: true,
      id: 'gpt-4-32k-0613',
      tokens: 32_768,
    },
    {
      displayName: 'Moonshot-V1',
      hidden: true,
      id: 'moonshot-v1',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'Moonshot-v1 Vision',
      files: true,
      hidden: true,
      id: 'moonshot-v1-vision',
      tokens: 128_000,
      vision: true,
    },
  ],
  enabled: true,
  id: 'openai',
};

export default OpenAI;
