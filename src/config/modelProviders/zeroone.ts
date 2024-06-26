import { ModelProviderCard } from '@/types/llm';

// ref https://platform.lingyiwanwu.com/
const ZeroOne: ModelProviderCard = {
  chatModels: [
    {
      description: '支持聊天、问答、对话、写作、翻译等功能。',
      displayName: '零一万物（34B）',
      id: 'yi-34b-chat-0205',
      tokens: 4096, // https://huggingface.co/01-ai/Yi-34B-Chat/blob/main/config.json
    },
    {
      description:
        '支持通用图片问答、图表理解、OCR、视觉推理，能处理高分辨率（1024*1024）的图像，能在复杂视觉任务上提供优秀性能，同时支持多种语言。',
      displayName: '零一万物（识图）',
      enabled: true,
      id: 'yi-vl-plus',
      tokens: 4096,
      vision: true,
    },
    {
      description: '增强了问答对话交互和深度内容创作能力。文档问答和构建知识库小能手。',
      displayName: '零一万物（200K）',
      enabled: true,
      id: 'yi-34b-chat-200k',
      tokens: 200_000, // https://huggingface.co/01-ai/Yi-34B-200K/blob/main/config.json
    },
  ],
  id: 'zeroone',
};

export default ZeroOne;
