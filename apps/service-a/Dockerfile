# ------------------- Stage 1: Build -------------------
    FROM node:20.15 as builder

    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    RUN npm install -g @nestjs/cli
    
    COPY . .
    RUN npm run build
    
    # ------------------- Stage 2: Runtime -------------------
    FROM node:20.15
    
    WORKDIR /app

    # # 1. Copy the compiled app code
    COPY --from=builder /app/dist/apps/service-a ./dist/apps/service-a
    
    # # 2. Copy the compiled library code
    COPY --from=builder /app/dist/libs/my-library ./dist/libs/my-library

    #COPY --from=builder /app/dist ./dist
    
    # 3. Install only runtime dependencies
    COPY package*.json ./
    RUN npm install --omit=dev
    
    EXPOSE 3001
    CMD ["node", "dist/apps/service-a/src/main.js"]
    