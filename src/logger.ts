import winston from 'winston';
import SlackHook from 'winston-slack-webhook-transport';
const { createLogger, format, transports } = winston;
const { combine, timestamp, colorize, printf, splat } = format;

const pickStackIfAvailable = format((info, _opts) => {
    if (info.stack !== undefined) {
        info.message = info.stack;
    }
    return info;
});

const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
    transports: [
        new transports.Console({
            format: combine(pickStackIfAvailable(), colorize(), timestamp(), splat(), customFormat)
        })
    ]
});

export function addSlackOutput(url: string): void {
    logger.add(
        new SlackHook({
            webhookUrl: url,
            level: 'warn',
            formatter: (info) => {
                let color = '#ffffff';
                let header = 'Unspecified Message';
                let text = info.message;
                switch (info.level) {
                    case 'warn':
                        color = '#f1af46';
                        header = 'Warning';
                        break;
                    case 'error':
                        color = '#f62323';
                        header = 'Error';
                        text = `${info.message}\n\n\`\`\`${info.stack}\`\`\``;

                        if (info.programStack !== undefined) {
                            text += `\nProgram Error\n\`\`\`${info.programStack}\`\`\``;
                        }

                        break;
                }

                return {
                    blocks: [
                        {
                            type: 'header',
                            text: {
                                type: 'plain_text',
                                text: header,
                                emoji: true
                            }
                        }
                    ],
                    attachments: [
                        {
                            color,
                            blocks: [
                                {
                                    type: 'section',
                                    text: {
                                        type: 'mrkdwn',
                                        text
                                    }
                                }
                            ]
                        }
                    ]
                };
            }
        })
    );
}

export default logger;
